
import axios from "axios";
import { useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import CustomText from "../../ui/CustomText";
import { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import Cookies from "js-cookie"
const PaymentStatus=()=>{
    const token=Cookies.get("token");
    const navigate=useNavigate();
    const {id}= useParams();
    const [orderStatus,setOrderStatus]=useState("")
    const getOrderStatusHandler=async()=>{
        try {
            const res=await axios.get(`http://localhost:3000/payment/payment-status/${id}`,{
                headers:{
                    "authorization":token
                }
            })
       console.log(res,"dgdfgdfgdgfddg");
       setOrderStatus(res?.data?.orderStatus)
       
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getOrderStatusHandler()
    },[])
    return(
        <div className="bg-[#0F172A] h-screen flex justify-center items-center">

            
            <div className="flex flex-col gap-2 items-center justify-center">

            <CustomText className={"!text-[50px]"} value={"Thank you for your purchase"}/>
           <CustomText className={"!text-[30px]"} value={`OrderId: ${id}`}/>
           <CustomText className={"!text-[30px] !text-green-400"} value={`Order Status: ${orderStatus}`}/>
            <CustomText className={"!text-[14px]"} value={"Now you are enjoy yourLeaderbord for watch top spend expenses"}/>
            <CustomButton onclick={()=>{navigate("/expense")}} value={"Enjoy Leaderboard"}/>
          </div>
        </div>
    )
}
export default PaymentStatus;