import CustomButton from "./CustomButton"
import CustomText from "./CustomText"
       

const ConfirmationPopup=({confirmationPopUpHandler,setDeleteConfirm,setDeleteId})=>{
    
    
    return(
        <>
          <CustomText className={"!text-[16px]"} value={`Are you sure you want to delete ?`}/>
          <div className="flex justify-end gap-3">
            <CustomButton className={"!text-[#fff]"} value={"Cancel"} onclick={()=>{setDeleteConfirm(false),setDeleteId(null)}}/>
            <CustomButton className={"!text-[#fff]"} value={"Ok"} onclick={()=>{confirmationPopUpHandler()}}/>
          </div>
        </>
    )
}
export default ConfirmationPopup