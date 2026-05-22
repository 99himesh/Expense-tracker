import { Button } from "antd";
import {FilterFilled} from '@ant-design/icons';
import CustomSlect from "./CustomSelect";
const CustomFiter=({className,options,setFilterState})=>{
    
    return(
        <>
       <div className={`border-[1px] h-[40px]  border-[#E6E7E9] flex justify-center px-2 py-1  rounded-md ${className}`}>
         <div className="rounded-md   flex gap-2 items-center">
            <div className="border-[1px] border-[#000]  rounded-md p-1 flex  items-center">
            <FilterFilled style={{fontSize:"16px"}}/>
            </div>
            
            <CustomSlect setFilterState={setFilterState} options={options}  defaultValue={"defaultValue"} className={"border-none"}/>
         </div>
       </div>
        </>
    )
}
export default CustomFiter;