import CustomButton from "../../ui/CustomButton";
import CustomInput from "../../ui/CustomInput";
import CustomText from "../../ui/CustomText";

const SignUp=()=>{
    return(
        <>
         <div className="w-[50%] h-screen m-auto flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"Sign Up"}/>
               <div className="flex flex-col gap-2">
                <CustomText value={"Name"}/>
                <CustomInput className={"!w-[300px]"} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Email"}/>
                <CustomInput className={"!w-[300px]"} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Password"}/>
                <CustomInput className={"!w-[300px]"} />
               </div>
               <div className="flex justify-center pt-3">
                <CustomButton value={"Sign Up"}/>
               </div>
         </div>
         </div>
        </>
    )
}
export default SignUp;