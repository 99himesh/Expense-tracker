import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CustomHeading from './CustomHeading';
import CustomText from './CustomText';
import "./common.css"
const CustomModal = ({footer,open,setOpen,value,modalBody,width,closeIcon}) => {  
  const handleOk = () => {
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  return (
    <div>
     
      <Modal
        width={width}
        title={<CustomText className={"!text-[16px] font-[600]"} value={value}/>}
        open={open}
        onOk={handleOk}
        onCancel={()=>{setOpen(false)}}
        footer={footer??true}
        padding={0}
        closeIcon={closeIcon && null}
        
      >
       {modalBody}
      </Modal>
    </div>
  );
};
export default CustomModal;