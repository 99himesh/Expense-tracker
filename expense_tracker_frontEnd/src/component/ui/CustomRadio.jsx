import { Radio } from "antd";
import CustomText from "./CustomText";

const CustomRadio = ({name,value,options,defaultValue,onchange,label,className}) => {
  return (
    <div className={`flex  items-center ${className}`}>
    <CustomText className={"font-semibold"}  value={label} />
      <Radio.Group name={name} value={value}  options={options} defaultValue={defaultValue} onChange={onchange} />
    </div>
  );
};
export default CustomRadio;
