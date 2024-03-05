import { AppBar } from "../components/AppBar"
import axios from "axios"
import BACKEND_URL from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const navigate=useNavigate();
    return (<div>
            <AppBar></AppBar>
            <div className="flex justify-center mb-2 mt-2 w-full">
                <div className="max-w-screen-lg w-full">
                <input onChange={(e)=>{
                    setTitle(e.target.value);
                }} type="text" placeholder="Title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                <TextEditor onChange={(e)=>{
                    setContent(e.target.value)
                }}></TextEditor>
                <button onClick={async ()=>{
                   const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content
                },{
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
             }} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 ">
            Publish post
            </button>
                </div>
            </div>
            </div>
        )
            
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return <div>
         <div className="px-4 py-2 bg-white rounded-b-lg border">
                <label  className="sr-only">Publish post</label>
                <textarea onChange={onChange} rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 " placeholder="Write an article..." required />
             </div>
            
            
        </div>

}