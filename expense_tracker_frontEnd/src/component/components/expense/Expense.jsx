import { useEffect, useState } from "react"
import CustomButton from "../../ui/CustomButton"
import CustomInput from "../../ui/CustomInput"
import CustomText from "../../ui/CustomText"
import axios from "axios"
import CustomSelect from "../../ui/CustomSelect"
import CustomTable from "../../ui/CustomTable"
import { Col, Row, Typography } from "antd"
import Cookies from "js-cookie"
import {
    DeleteOutlined
} from '@ant-design/icons';
import LeaderBoard from "./LeaderBoard"
import YourExpense from "./YourExpense"
const Expense = () => {
    const token = Cookies.get("token");
    const [expenseInput, setExpenseInput] = useState({
        expenseAmount: null,
        description: "",
        category: ""
    });

    const expenseInputHandler = (e) => {
        const { name, value } = e.target;
        setExpenseInput({ ...expenseInput, [name]: value })
    }
    const getExpense = async () => {
        try {
            const res = await axios.get("http://localhost:3000/expense/getExpense", {
                headers: {
                    "Authorization": token
                }
            })


        } catch (error) {
            console.log(error);

        }
    }
    const addExpenseHandler = async () => {
        const data = { ...expenseInput }
        try {
            const res = await axios.post("http://localhost:3000/expense/addExpense", data, {
                headers: {
                    "Authorization": token
                }
            })


            if (res.status == 201) {
                getExpense();
                setExpenseInput({
                    expenseAmount: null,
                    description: "",
                    category: ""
                })
            }
        } catch (error) {
            console.log(error);

        }
    }
    

  



   
    return (
        <div className="h-screen pt-10 ">
            {/* <div className="w-[50%]  m-auto flex justify-center items-center"> */}
            <div className="container mx-auto">
                <Row  >
                    <Col span={12}>
                        <div className="flex flex-col items-center  gap-4">
                            <CustomText className={"!text-[30px] text-center"} value={"Add Expense"} />
                            <div className="flex flex-col gap-2">
                                <CustomText value={"ExpenseAmount"} />
                                <CustomInput name="expenseAmount" value={expenseInput?.expenseAmount} onchange={(e) => { expenseInputHandler(e) }} className={"!w-[300px]"} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <CustomText value={"Description"} />
                                <CustomInput name="description" value={expenseInput?.description} onchange={(e) => { expenseInputHandler(e) }} className={"!w-[300px]"} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <CustomText value={"Category"} />
                                {/* <CustomInput name="category" value={expenseInput?.category} onchange={(e)=>{expenseInputHandler(e)}} className={"!w-[300px]"} /> */}
                                <CustomSelect
                                    className="!w-[300px]"
                                    onchange={(e) => { setExpenseInput({ ...expenseInput, category: e }) }}
                                    value={expenseInput.category}
                                    options={[
                                        { label: "Food", value: "food" },
                                        { label: "Groceries", value: "groceries" },
                                        { label: "Rent", value: "rent" },
                                        { label: "Water bill", value: "water bill" }
                                    ]} />
                            </div>
                            <div className="flex justify-center pt-3">
                                <CustomButton onclick={() => { addExpenseHandler() }} value={"Add Expense"} />
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <LeaderBoard />
                    </Col>
                </Row>
                 <YourExpense/>
            </div>
        </div>




    )
}
export default Expense;