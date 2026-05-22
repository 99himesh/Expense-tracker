import { Input } from "antd";
import {SearchOutlined } from '@ant-design/icons';

const CustomSearch=({onchange,placeholder,value})=>{
    return(
        <>
        <Input value={value} onChange={onchange} className="!bg-[#F8F8FA] h-[40px] xl:!w-[450px] md:!w-[300px] !w-[350px]"  suffix={<SearchOutlined />} width={200} placeholder={placeholder??"Search by Name, email"}/>
        </>
    )
}

export default CustomSearch;