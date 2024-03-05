import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks"


export const Blogs=()=>{
    // const {loading,blogs}=useBlogs();
    const {loading,blogs}=useBlogs();
    // console.log(blogs);
    // const {loading,blogs}=useBlogs();
    if(loading){
        return (<div>
                <AppBar></AppBar>
                <div className="flex justify-center">
                    <div className="">
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                    </div>
                </div>
            </div>
        )
       
    }
    console.log(blogs);
    return <div>
        <AppBar></AppBar>
        
    <div className="flex justify-center ">
    
        <div className="">
           {blogs.map((blog)=>( <BlogCard id={blog.id} authorName={blog.author.name || "anonymous"}
                content={blog.content}
                title={blog.title}
                publishedDate={"03/03/2024"}></BlogCard>))}
        </div>
        </div>
    </div>
}