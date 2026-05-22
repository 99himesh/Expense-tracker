import { Collapse, Empty } from "antd";
import { useState } from "react";

const CustomAccordian=({items,expandIcon,setKey})=>{
    const accordianHandler = key => {
    setKey(key);
  };
   
    return(
        <div >
          {items?.length==0 ?<Empty/>:
        <Collapse  ghost={true} expandIcon={expandIcon}  expandIconPosition={"end"} items={items}  onChange={accordianHandler} />
          }
        </div>
    )
}
export default CustomAccordian;
