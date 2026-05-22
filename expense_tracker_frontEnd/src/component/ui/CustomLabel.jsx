import CustomText from "./CustomText";

const CustomLabel=({value,required})=>{
    return(
        <>
         <div className="flex gap-1">
                <CustomText value={value}/>
                {required && <CustomText className={"!text-[#EF4444]"} value={"*"}/>}
                </div>
        </>
    )
}
export default CustomLabel;