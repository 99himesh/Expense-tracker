import CustomText from "./CustomText";

const CustomUserData=({label,value})=>{
    return(
        <>
        <div className="flex flex-col gap-3">
            <CustomText className={"!text-[#A2A1A8] !text-[14px] font-[400] !text-start "} value={label}/>
            <CustomText className={"!text-[16px] font-[400] !text-start w-[250px]"} value={value}/>
        </div>
        </>
    )
}

export default CustomUserData;