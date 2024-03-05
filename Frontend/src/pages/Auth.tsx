import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import BACKEND_URL from "../config";

export const Auth=({type}:{type: "signup" | "signin"})=>{
    const navigate=useNavigate();
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:""
    });
    
    async function sendRequest() {
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}`,inputs);
            const jwt=response.data;
            localStorage.setItem("token",jwt.token);
            navigate("/blogs")
        }catch(e){
            alert("err");
        }
        
    }
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10 font-extrabold text-3xl">
                    Create an account
                </div>
                <div className="px-10 text-slate-400">
                    {type==="signin"?"Don't have an account":"Already have an account ?"}
                    <Link className="underline pl-2" to={type==="signin"?"/signup":"/signin"}>{type==="signin"?"Sign Up":"Login"}</Link>
                </div>
                <div>
               {type==="signup"?<LabelledInput label={"Username"} placeholder={"Venkatesh"} onChange={(e:any)=>{
                    setInputs({
                        ...inputs,
                        name:e.target.value
                    })
                   
                } } type={"text"}></LabelledInput>:""}

                <LabelledInput label={"Email"} placeholder={"Venkatesh@gmail.com"} onChange={(e:any)=>{
                    setInputs({
                        ...inputs,
                        email:e.target.value
                    })
                   
                } } type={"text"}></LabelledInput>

                <LabelledInput label={"Password"} placeholder={"12345678"} onChange={(e:any)=>{
                    setInputs({
                        ...inputs,
                        password:e.target.value
                    })
                   
                } } type={"password"}></LabelledInput>
                </div>
                <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"signup":"signin"}</button>

             
            </div>
           
        </div>

    </div>

}

interface LabelledInputInterface{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}

function LabelledInput({label,placeholder,onChange,type}:LabelledInputInterface){
    return <div>
         <div>
            <label  className="block mb-2 text-sm font-semibold text-semibold  pt-4">{label}</label>
            <input onChange={onChange} type={type ||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
       {/* <div>
            <label  className="block mb-2 text-sm font-medium text-dark">Username</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="venkatesh@gmail.com" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-dark">Password</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123456" required />
        </div> */}
    </div>
}