import { Button, Pagination } from "antd"
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import { useState } from "react";
const CustomPagination=({onchange,total,pageNumber,pageSize,setPageSize})=>{ 
const onShowSizeChange = (current, pageSz) => {
  setPageSize(pageSz)
};
    return(
    <>
       <div  className="flex justify-center items-center w-[90%] mx-auto pt-5">
        <Pagination showSizeChanger  pageSizeOptions={[2,5,8,10,15,20]} onShowSizeChange={onShowSizeChange} pageSize={pageSize} onChange={onchange}  total={total}  />
        </div>
          {/* <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    /> */}
        </>
    )
}
export default CustomPagination;