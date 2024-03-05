import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard";

export const FullBlog=({blog}:{blog:Blog})=>{
    console.log(blog);
    return <div>
        <AppBar></AppBar>

    <div className="grid grid-cols-12 px-16 pt-12 max-w-screen-xl">

        <div className="col-span-8  ">
            <div className="text-5xl font-bold">
                {blog.title}
            </div>
            <div className="pt-4 text-slate-500">
                Posted on 2nd December
            </div>
                
            <div className="pt-2">
                {blog.content}
            </div>
        </div>

        <div className="col-span-4 bg-green-500">
                <div className="text-slate-500 text-md">
                    Author
                </div>
               
                <div className="flex">
                    <div className="flex flex-col justify-center pr-2">
                         <Avatar size={6} name={blog.author.name || "Anonymous"}></Avatar>
                    </div>
                    
                    <div>
                    <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                    </div>
                    
                    <div className="text-slate-500">
                        Random catch phrase about the author
                    </div>
                    </div>
                    
                </div>
                
               

        </div>
        </div>
    </div>
}