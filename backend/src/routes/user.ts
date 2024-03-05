import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {decode,jwt,sign,verify} from "hono/jwt";

const userRouter= new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const body=await c.req.json();
    // console.log(body);
    try{
    const user=await prisma.user.create({
      data:{
        email:body.email,
        password:body.password,
        name:body.name
      }
    });
  
    const token=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({
      token
    })}
    catch(e){
        c.status(403);
       return  c.json({
            msg:"signup failed"
        })
    }
  })
  
userRouter.post('/signin',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body=await c.req.json();
    try{
    const user=await prisma.user.findUnique({
        where:{
        email:body.email,
        password:body.password
        }
    });
    if(!user){
        return c.json({
        msg:"user doesn't exist"
        })
    }
    const token=await sign({id:user.id},c.env.JWT_SECRET);
    return c.json({
        token
    });
}catch(e){
    c.status(403);
    return c.json({
        msg:"signin failed"
    })
}
    })
    
export default userRouter;
