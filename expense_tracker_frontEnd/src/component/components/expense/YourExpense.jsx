import axios from "axios";
import CustomTable from "../../ui/CustomTable";
import Cookies from "js-cookie"
import { useState } from "react";
import CustomText from "../../ui/CustomText";
import { Typography } from "antd";
import {
    DeleteOutlined
} from '@ant-design/icons';
import { useEffect } from "react";
import CustomSelect from "../../ui/CustomSelect";
import CustomPagination from "../../ui/CustomPagination";
const YourExpense = ({expense,setExpense,totalExpense,setTotalExpense}) => {
    
    const token = Cookies.get("token");
    const [page,setPage]=useState(1);
    const [pageSize,setPageSize]=useState(5);

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
        {
            title: <CustomText value={"Action"} />,
            dataIndex: 'description',
            key: 'description',
            align: "center",
            render: (_, text) => {
                return <div className="cursor-pointer" onClick={() => { expenseDeleteHandler(text) }} >
                    <DeleteOutlined style={{ fontSize: "20px" }} />
                </div>
            }
        },

    ];

    const getExpense = async () => {
        try {
            const res = await axios.get("http://localhost:3000/expense/getExpense", {
                headers: {
                    "Authorization": token
                },
                params:{
                    page:page,
                    limit:pageSize
                }
            })
            setExpense(res?.data?.expenses);
            setTotalExpense(res?.data?.totalCount);


        } catch (error) {
            console.log(error);

        }
    }

    const expenseDeleteHandler = async (item) => {
        const data = { ...expenseInput }
        try {
            const res = await axios.delete(`http://localhost:3000/expense/deleteExpense/${item?.id}`, {
                headers: {
                    "Authorization": token
                }
            })


            if (res.status == 201) {
                getExpense();
            }
        } catch (error) {
            console.log(error);

        }

    }
  console.log(totalExpense);
  
    useEffect(() => {
        getExpense();
    }, [page,pageSize])
    return (
        <>
            <div className="flex flex-col gap-3  mx-auto pt-5 bg-[#1F6F5F] rounded-t-2xl mt-5 ">
                <div className="flex justify-between px-3">
                  <CustomText className={"!text-[24px]"} value={"Your Expense"}/>
                  <CustomSelect 
                    options={[
                        {label:"Yearly",value:"yearly"},
                        {label:"Monthly",value:"monthly"},
                        {label:"Daily",value:"daily"}
                    ]}
                    placeholder="select expense duration"
                  />
                </div>
                <CustomTable scroll={{ y: 400 }} columns={expenseColumn} dataSource={expense} />
                <CustomPagination pageSize={pageSize} setPageSize={setPageSize} onchange={(e)=>{setPage(e)}} total={totalExpense} defaultCurrent={page} />
            </div>
        </>
    )
}
export default YourExpense;