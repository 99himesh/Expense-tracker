import axios from "axios";
import CustomButton from "../../ui/CustomButton";
import CustomInput from "../../ui/CustomInput";
import CustomText from "../../ui/CustomText";
import { useState } from "react";
import { Link } from "react-router";

const SignUp=()=>{
    const [singUpInput,setSignUpInput]=useState({
        name:"",
        email:"",
        password:""
    })

    const signInputUpHandler=(e)=>{
        const {name,value}=e.target;
        setSignUpInput({...singUpInput,[name]:value});

    }

    const signUpHandler=async()=>{
        const data={...singUpInput}
        try {
            const res=await axios.post("http://localhost:3000/users/signUp",data);
            console.log(res);
            
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    return(
        <>
         <div className="w-[50%] h-screen m-auto flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"Sign Up"}/>
               <div className="flex flex-col gap-2">
                <CustomText value={"Name"}/>
                <CustomInput name="name" value={singUpInput?.name} onchange={(e)=>{signInputUpHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Email"}/>
                <CustomInput name="email" value={singUpInput?.email} onchange={(e)=>{signInputUpHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Password"}/>
                <CustomInput name="password" value={singUpInput?.password} onchange={(e)=>{signInputUpHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex justify-center pt-3">
                <CustomButton onclick={()=>{signUpHandler()}} value={"Sign Up"}/>
               </div>
                <div className="text-[#fff] flex justify-center">
               <Link to={"/login"}>have you already Account? Login</Link>
               </div>
         </div>
         </div>
        </>
    )
}
export default SignUp;