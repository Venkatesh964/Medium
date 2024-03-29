import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar=()=>{
    return <div className="border-b flex justify-between px-10 py-4">
            <div>
                <Link to={"/blogs"}>
                    <div className="cursor-pointer">
                        Medium
                    </div>
                </Link>
            </div>
       
            <div className="">
                <Link to={'/publish'}>
                    <button type="button" className=" mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>      
                </Link>
                <div className={`relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                    <span className="font-light text-xs text-gray-600 dark:text-gray-300">{"V"}</span>
                </div>
            </div>
    </div>
}