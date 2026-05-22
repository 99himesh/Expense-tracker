import axios from "axios";
import CustomButton from "../../ui/CustomButton";
import CustomInput from "../../ui/CustomInput";
import CustomText from "../../ui/CustomText";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login=()=>{
    const navigate=useNavigate()
    const [loginInput,setloginInput]=useState({
        email:"",
        password:""
    })

    const loginInputUpHandler=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        
        setloginInput({...loginInput,[name]:value});

    }

    const loginHandler=async()=>{
        const data={...loginInput};
        console.log(data,"dfsd");
        
        try {
            const res=await axios.post("http://localhost:3000/users/login",data);
            if(res.status==200){
                navigate("/expense")
            }
                        
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    return(
        <>
         <div className="w-[50%] h-screen m-auto flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"Login"}/>
               <div className="flex flex-col gap-2">
                <CustomText value={"Email"}/>
                <CustomInput name="email" value={loginInput?.email} onchange={(e)=>{loginInputUpHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Password"}/>
                <CustomInput name="password" value={loginInput?.password} onchange={(e)=>{loginInputUpHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex justify-center pt-3">
                 <CustomButton onclick={()=>{loginHandler()}} value={"Log in"}/>
               </div>
               <div className="text-[#fff] flex justify-center">
               <Link to={"/signUp"}>Dont have Account? Sign Up</Link>
               </div>
               
         </div>
         </div>
        </>
    )
}
export default Login;