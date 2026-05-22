

import { Select } from "antd";
import "./common.css"
const CustomSelect = ({
  mode,
  options = [],
  onchange,
  className = "",
  placeholder = "Select an option",
  value,
  required,
  showSearch=false,
   onSearch,
   defaultValue,
   onBlur
}) => {
  return (
    <Select
      // defaultValue="lucy"
      onBlur={onBlur}
      mode={mode??mode}
      style={{color:"#fff!important"}}
      value={value}
      onChange={onchange}
      options={options}
      className={`min-h-[40px] white-select ${className}`}
      placeholder={placeholder}
      showSearch={showSearch}
      onSearch={onSearch}
      defaultValue={defaultValue}
      
    />
  );
};

export default CustomSelect;