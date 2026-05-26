import axios from "axios";
import CustomButton from "../../ui/CustomButton";
import CustomText from "../../ui/CustomText";
import { load } from "@cashfreepayments/cashfree-js";
import Cookies from "js-cookie"
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import CustomTable from "../../ui/CustomTable";
const LeaderBoard=()=>{
    const {leaderBoardStatus,setLeaderBoardStatus}=useState(false)
    const navigate=useNavigate();
    const token=Cookies.get("token");
        let cashfree;
      const initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
         });
       }
    initializeSDK();

    const doPayment = async () => {
     try {
            const res=await axios.post("http://localhost:3000/payment/pay",{},{
                headers:{
                    "Authorization":token
                }
            });            
           const sessionId=res.data.paymentSessionId; 
            let checkoutOptions = {
                paymentSessionId: sessionId,
                redirectTarget: "_self",
            };
          const result=await cashfree.checkout(checkoutOptions);
           
            } catch (error) {
              console.log({error:error});   
            }
    };


       const cheackLeaderBoardStatus=async()=>{
          try {
             const res=await axios.get("http://localhost:3000/payment/check-paymentStatus",{
                headers:{
                    "authorization":token
                }
             });
             if(res.data.payments==="Success"){
             setLeaderBoardStatus(true)
               
             }
          
            
          } catch (error) {
            console.log(error);
            
          }
       }
   useEffect(()=>{
    cheackLeaderBoardStatus()
   },[])
     const expenseColumn = [
        {
            title: <CustomText value={"Id"} />,
            dataIndex: 'expenseAmount',
            key: 'expenseAmount',
            width: 100,
            render: (_, text, idx) => <Typography.Text>{idx + 1}</Typography.Text>
        },
        {
            title: <CustomText value={"Expense Amount"} />,
            dataIndex: 'expenseAmount',
            key: 'expenseAmount',
            render: (_, text) => <Typography.Text>Rs. {text.expenseAmount}</Typography.Text>
        },
        {
            title: <CustomText value={"Category"} />,
            dataIndex: 'category',
            key: 'category',
            render: (_, text) => <Typography.Text>{text.category}</Typography.Text>
        },
        {
            title: <CustomText value={"Description"} />,
            dataIndex: 'description',
            key: 'description',
            render: (_, text) => <Typography.Text>{text.description}</Typography.Text>
        },
       

    ];
    return(
        <div className="">
        {leaderBoardStatus? 
       ( <div>
        <div className="flex justify-center  gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"Premium Membership"}/>
        </div>
        <div className="flex justify-center items-center pt-5">
            <CustomButton onclick={()=>{doPayment()}} value={"Buy Premium Membership"}/>
        </div>
        </div>)
        :(
            <div>
                <div className="flex justify-center  gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"LeaderBoard"}/>
                </div>
                <div className="flex justify-center items-center pt-5">
                    <CustomTable scroll={{ y: 400 }} dataSource={[1,2,3]} />
                
                </div>
             </div>
        )}
        </div>
    )
}
export default LeaderBoard;