import { Image } from "antd";
import pending from "../../assets/icon/pending.jpeg";
import CustomText from "./CustomText";
const CustomPendingText=()=>{
    return(
        <div className="flex  items-center  gap-3">
           <Image className="!size-[24px]" src={pending} preview={false}/>
           <CustomText className={"!text-[6px] " } value={"Pending"}/>
        </div>
    )
}
export default CustomPendingText;