
import { Typography } from 'antd';
const { Title } = Typography;
const CustomHeading=({level,value,className})=>{        
    return (
        <>
         <Title className={`text-center !m-0 ${className}`} level={level??1}>{value}</Title>
        </>
    )
}
export default CustomHeading;