import CustomButton from "./CustomButton"
import CustomText from "./CustomText"
       

const CustomStatusChangeConfirmationPopUp=({confirmationPopUpHandler,setUpdateConfirm})=>{
    
    
    return(
        <>
          <CustomText className={"!text-[16px]"} value={`Are you sure you want to change order status?`}/>
          <div className="flex justify-end gap-3">
            <CustomButton className={"!text-[#fff]"} value={"Cancel"} onclick={()=>{setUpdateConfirm(false)}}/>
            <CustomButton className={"!text-[#fff]"} value={"Ok"} onclick={()=>{confirmationPopUpHandler()}}/>
          </div>
        </>
    )
}
export default CustomStatusChangeConfirmationPopUp;