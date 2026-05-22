import {  Typography } from 'antd';
const { Text } = Typography;


const TableHeaderText=({value,className})=>{
    return(
        <>
        <Text  className={`text-[14px]  !text-[#181819B2] ${className}`}>{value}</Text>
        </>
    )
}
export default TableHeaderText;
