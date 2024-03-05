import { Circle } from "./BlogCard"

export const Skeleton=()=>{

    return <div>

        <div role="status" className=" animate-pulse">


        <div className="border-b p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="">
            <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
           
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            <div className=" pl-2 flex justify-center flex-col">
            <Circle ></Circle>
            </div>
          
            <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

        </div>
        
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
    </div>

    </div>


    </div>

}