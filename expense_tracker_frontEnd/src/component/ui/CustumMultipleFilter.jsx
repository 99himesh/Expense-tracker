import { Cascader } from "antd"

const CustomMultipleFilter=({onchange,option,placeholder,value})=>{
    return(
        <>
        <Cascader options={option} onChange={onchange} placeholder={placeholder}  value={value} />
        </>
    )
}

export default CustomMultipleFilter;