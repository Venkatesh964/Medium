import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,jwt,sign,verify} from "hono/jwt";
const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string   
    }
}>();

blogRouter.use('*', async (c, next) => {
    const header=c.req.header("authorization") || " ";
    const token=header.split(" ")[1];
    try{
  
    const response=await verify(token,c.env.JWT_SECRET);
    console.log(response);
    if(response){
        c.set("userId",response.id);
      await next();
    }else{
      c.status(403)
      return c.json({
        error:"user is not logged in"
      })
    }
}   catch(e){
    c.status(403);
    return c.json({
        msg:"unauthenticated"
    })
}
  })

blogRouter.post('/',async (c) => {
    const body=await c.req.json();
    const userId=c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const post=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
      });
    return c.json({
        id:post.id
    });
  })
  
  blogRouter.put('/', async (c) => {
    const body=await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const post=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
        }
      });
    return c.json({
        id:post.id
    });
  })


  blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      const user=await prisma.user.findFirst({
        select:{id:true,name:true}
      });

      const blogs=await prisma.post.findMany({
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          },
        }
      });
     
    
    return c.json({
        blogs
    })
  })
  
  blogRouter.get('/:id', async (c) => {
    
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());
      try{
    const post=await prisma.post.findFirst({
        where:{
            id:c.req.param("id")
        },
        select:{
          id:true,
          content:true,
          title:true,
          author:{
            select:{
              name:true
            }
          }
        }
    });
    return c.json({
       blog:post
    });}
    catch(e){
         c.status(411);
        return c.json({
            msg:"error while fetching blog post"
        })
    }
  })
  
  
  

export default blogRouter;