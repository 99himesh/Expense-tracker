import { Button, Pagination } from "antd"
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import { useState } from "react";
const CustomPagination=({onchange,total,pageNumber})=>{  

    return(
    <>
       <div  className="flex justify-center items-center w-[90%] mx-auto pt-5">
        <Pagination  pageSize={5} showSizeChanger={false} onChange={onchange} defaultCurrent={pageNumber} total={total}  />
        </div>
        </>
    )
}
export default CustomPagination;