import { Collapse } from "antd";

const CustomAccordian=({items})=>{
    return(
        <>
         <Collapse accordion items={items} />
        </>
    )
}
export default CustomAccordian;