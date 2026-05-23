import { useEffect, useState } from "react"
import CustomButton from "../../ui/CustomButton"
import CustomInput from "../../ui/CustomInput"
import CustomText from "../../ui/CustomText"
import axios from "axios"
import CustomSelect from "../../ui/CustomSelect"
import CustomTable from "../../ui/CustomTable"
import { Typography } from "antd"
import Cookies from "js-cookie"
import {
    DeleteOutlined
} from '@ant-design/icons';
const Expense=()=>{
    const token=Cookies.get("token");
    const [expenseInput,setExpenseInput]=useState({
        expenseAmount:null,
        description:"",
        category:""
    });
    const [expense,setExpense]=useState([])
   
    const expenseInputHandler=(e)=>{
        const {name,value}=e.target;
        setExpenseInput({...expenseInput,[name]:value})
    }
     const getExpense=async()=>{
            try {
                const res=await axios.get("http://localhost:3000/expense/getExpense",{
                headers:{
                    "Authorization":token
                }
                })
                setExpense(res.data.expenses);
                
                
            } catch (error) {
               console.log(error);
                
            }
         }
    const addExpenseHandler=async()=>{
        const data={...expenseInput}
             try {
                 const res=await axios.post("http://localhost:3000/expense/addExpense",data,{
                    headers:{
                        "Authorization":token
                    }
                 })
                
                 
                 if(res.status==201){
                    getExpense();
                    setExpenseInput({ 
                        expenseAmount:null,
                        description:"",
                        category:""
                        })
                  }
                } catch (error) {
                 console.log(error);
                    
                }   
         }
         const expenseDeleteHandler=async(item)=>{
            const data={...expenseInput}
             try {
                 const res=await axios.delete(`http://localhost:3000/expense/deleteExpense/${item?.id}`,{
                    headers:{
                        "Authorization":token
                    }
                 })
                
                 
                 if(res.status==201){
                    getExpense();
                  }
                } catch (error) {
                 console.log(error);
                    
                }
              
         }
        
         useEffect(()=>{
            getExpense();
         },[])



         const expenseColumn = [
             {
                title: <CustomText value={"Id"}/>,
                dataIndex: 'expenseAmount',
                key: 'expenseAmount',
                width:100,
                render:(_,text,idx)=><Typography.Text>{idx+1}</Typography.Text>
            },
            {
                title: <CustomText value={"Expense Amount"}/>,
                dataIndex: 'expenseAmount',
                key: 'expenseAmount',
                render:(_,text)=><Typography.Text>Rs. {text.expenseAmount}</Typography.Text>
            },
              {
                title: <CustomText value={"Category"}/>,
                dataIndex: 'category',
                key: 'category',
                render:(_,text)=><Typography.Text>{text.category}</Typography.Text>
            },
            {
                title: <CustomText value={"Description"}/>,
                dataIndex: 'description',
                key: 'description',
                render:(_,text)=><Typography.Text>{text.description}</Typography.Text>
            },
            {
                title: <CustomText value={"Action"}/>,
                dataIndex: 'description',
                key: 'description',
                align:"center",
                render:(_,text)=>{
                    return    <div className="cursor-pointer" onClick={()=>{expenseDeleteHandler(text)}} >
                            <DeleteOutlined style={{fontSize:"20px"}}/>
                        </div>
                }
            },
          
            ];
    return(
        <div className="h-screen pt-10">
         <div className="w-[50%]  m-auto flex justify-center items-center">
              <div className="flex flex-col gap-4">
                <CustomText className={"!text-[30px] text-center"} value={"Add Expense"}/>
               <div className="flex flex-col gap-2">
                <CustomText value={"ExpenseAmount"}/>
                <CustomInput name="expenseAmount" value={expenseInput?.expenseAmount} onchange={(e)=>{expenseInputHandler(e)}} className={"!w-[300px]"} />
               </div>
               
               <div className="flex flex-col gap-2">
                <CustomText value={"Category"}/>
                {/* <CustomInput name="category" value={expenseInput?.category} onchange={(e)=>{expenseInputHandler(e)}} className={"!w-[300px]"} /> */}
                <CustomSelect 
                onchange={(e)=>{setExpenseInput({...expenseInput,category:e})}} 
                value={expenseInput.category}
                 options={[
                    {label:"Food",value:"food"},
                    {label:"Groceries",value:"groceries"},
                    {label:"Rent",value:"rent"},
                    {label:"Water bill",value:"water bill"}
                    ]} />
               </div>
               <div className="flex flex-col gap-2">
                <CustomText value={"Description"}/>
                <CustomInput name="description" value={expenseInput?.description} onchange={(e)=>{expenseInputHandler(e)}} className={"!w-[300px]"} />
               </div>
               <div className="flex justify-center pt-3">
                 <CustomButton onclick={()=>{addExpenseHandler()}}  value={"Add Expense"}/>
               </div>
               
               
         </div>
         
         </div>
         <div className="flex flex-col gap-3 w-[80%] mx-auto pt-5">
               <CustomTable scroll={{y:400}}  columns={expenseColumn} dataSource={expense}/>
               </div>
        </div>
    )
}
export default Expense;