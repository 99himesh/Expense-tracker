import axios from "axios";
import CustomButton from "../../ui/CustomButton";
import CustomText from "../../ui/CustomText";
import { load } from "@cashfreepayments/cashfree-js";
import Cookies from "js-cookie"
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import CustomTable from "../../ui/CustomTable";
import { Typography } from "antd";
const LeaderBoard=()=>{
    const [leaderBoardStatus,setLeaderBoardStatus]=useState(false);
    const [leaderBoard,setLeaderBoard]=useState([])
    console.log(leaderBoardStatus);
    
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
       const getLeaderBoard=async()=>{
          try {
             const res=await axios.get("http://localhost:3000/leaderBoard/getLeaderBoard",{
                headers:{
                    "authorization":token
                }
             });
            console.log(res?.data?.leaderBoard,"dsfsdhghj");
            setLeaderBoard(res?.data?.leaderBoard)
          
            
          } catch (error) {
            console.log(error);
            
          }
       }
        useEffect(()=>{
            cheackLeaderBoardStatus();
            getLeaderBoard()
        },[])
     const leaderBoardColumn = [
        {
            title: <CustomText value={"Id"} />,
            dataIndex: 'expenseAmount',
            key: 'expenseAmount',
            width: 70,
            render: (_, text, idx) => <Typography.Text>{idx + 1}</Typography.Text>
        },
         {
            title: <CustomText value={"Name"} />,
            dataIndex: 'name',
            key: 'name',
            render: (_, text, idx) => <Typography.Text>{text?.name}</Typography.Text>
        },
        {
            title: <CustomText value={"Total Expense"} />,
            dataIndex: 'total_cost',
            key: 'total_cost',
            render: (_, text) => <Typography.Text>Rs. {text?.total_cost}</Typography.Text>
        },
        
       

    ];

    console.log(leaderBoard);
    
    return(
        <div className="">
        {!leaderBoardStatus? 
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
                <CustomText className={"!text-[30px] text-center"} value={"You are a premium user"}/>
                </div>
                <div className="flex justify-center items-center pt-5">
                    <CustomTable scroll={{ y:400 }} columns={leaderBoardColumn} dataSource={leaderBoard} />
                
                </div>
             </div>
        )}
        </div>
    )
}
export default LeaderBoard;