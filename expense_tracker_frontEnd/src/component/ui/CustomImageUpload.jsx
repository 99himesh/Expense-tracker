import { Upload } from "antd";
import { useState } from "react";

const CustomImageUpload=({label,imageUploadHandler})=>{


 
    return(
        <>
   <label className="cursor-pointer">
       {label}
        <input
          type="file"
          onChange={(e)=>{imageUploadHandler(e)}}
          accept=".csv,image/*,video/*"
          className="hidden"
        />
      </label>
        </>
    )
}
export default CustomImageUpload;