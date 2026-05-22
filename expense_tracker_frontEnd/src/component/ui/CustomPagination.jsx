import { Button, Pagination } from "antd"
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
const CustomPagination=({onchange,total,pageNumber})=>{  
    const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <Button><LeftOutlined /> Previous</Button>;
  }
  if (type === 'next') {
    return <Button> Next <RightOutlined /></Button>;
  }
  return originalElement;
};
    
    return(
    <>
      {total>10 &&  <div  className="flex justify-center items-center w-[90%] mx-auto pt-5">
        <Pagination showSizeChanger={false} onChange={onchange} defaultCurrent={pageNumber} total={total} itemRender={itemRender} />
        </div>}
        </>
    )
}
export default CustomPagination;