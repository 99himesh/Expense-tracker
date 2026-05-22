
import { DatePicker, Space } from 'antd';
const CustomDate=({onchange,className,less=false,showTime=false})=>{
    return(
        <>
        <DatePicker showTime={showTime} disabledDate={(current) => {
        const today = new Date().setHours(0, 0, 0, 0);

        if (!current) return false;

        return less
          ? current.valueOf() < today   // past dates disabled
          : current.valueOf() > today;  // future dates disabled
      }} 
                     className={`${className}`} onChange={onchange} />
        </>
    )
}
export default CustomDate;