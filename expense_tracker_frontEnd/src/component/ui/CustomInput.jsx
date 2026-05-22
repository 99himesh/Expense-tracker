import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./common.css"

const CustomInput = ({ onchange, placeholder, type,size,value ,name,className,addonBefore,search}) => {
  return (
    <>
        
        <Input
        name={name}
        size={size}
        type={`${type ?? "text"}`}
        onChange={onchange}
        placeholder={placeholder}
        value={value}
        className={`min-h-[40px] no-spinner ${className}`}
        addonBefore={addonBefore}
        suffix={search && <SearchOutlined style={{ fontSize: "16px" }} />}
        />

       
    </>
  );
};
export default CustomInput;
