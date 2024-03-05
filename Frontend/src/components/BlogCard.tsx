import { Link } from "react-router-dom";

interface BlogCardProps{
    id:string
    authorName:string;
    content:string;
    title:string;
    publishedDate:string
}


export const BlogCard=({authorName,content,title,publishedDate,id}:BlogCardProps)=>{
    return <Link to={"/blog/${id}"}>
    <div className="border-b p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="">
            <Avatar name={authorName} ></Avatar>
            
            </div>
           
            <div className="flex justify-center flex-col pl-2 font-extralight text-slate-500 text-sm">{authorName} </div>
            <div className=" pl-2 flex justify-center flex-col">
            <Circle ></Circle>
            </div>
          
            <div className="flex justify-center font-thin flex-col pl-2 text-slate-400 text-xs">{publishedDate}</div>

        </div>
        
        <div className="w-full font-semibold">{title}</div>
        <div className="text-sm w-full">{content.slice(0,100)+"..."}</div>
        <div className=" text-slate-400 text-xs pt-2">{ `${Math.ceil(content.length/100)} minute(s) read`}</div>
    </div>
    </Link> 
}

export function Circle(){
    return <div className="w-1 h-1 rounded-full bg-slate-400 ">

    </div>
}

export function Avatar({ name,size=4 }: { name: string,size?:Number }){
    return <div>
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className="font-light text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
    </div>
   
}

// export function Avatar({ name}: { name: string}){
//     return <div>
//         <div className={`relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
//     <span className="font-light text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
// </div>
//     </div>
   
// }