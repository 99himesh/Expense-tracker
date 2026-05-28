import { Button } from "antd";

const CustomButton = ({ value, onclick, className ,type,disable}) => {
  return (
    <div>
      <Button
         disabled={disable??false}
        className={`    font-semibold  !rounded-full   !border-none  !bg-[#6FCF97] hover:!text-[#000000] ${className}`}
        onClick={onclick}
        type={type}
      >
        {value}
      </Button>
    </div>
  );
};
export default CustomButton;
