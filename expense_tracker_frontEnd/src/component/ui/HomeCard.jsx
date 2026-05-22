import { Card } from "antd";
import CustomText from "./CustomText";
const HomeCard=({data,value,heading,background})=>{
    return(
        <>
         <Card style={{background:background}} >
            <div className="flex flex-col gap-10 ">
      <div className="flex  flex-col gap-1 justify-start items-start "> 
        <CustomText value={<CustomText className={`!text-[16px] font-semibold`} value={value} />} />
        <CustomText value={<CustomText className={"!text-[18px] font-[400]"} value={data} />} />
      </div>
      <div className="flex justify-start">
        <CustomText value={<CustomText className={"!text-[16px] font-[500]"} value={heading} />} />
      </div>
      </div>
  </Card>
        </>
    )
}
export default HomeCard;