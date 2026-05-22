import { DatePicker } from "antd";
import CustomLoader from "../loader/Loader";
import CustomFiter from "./CustomFilter";
import CustomSearch from "./CustomSearch";
import CustomTable from "./CustomTable";
const { RangePicker } = DatePicker;

const   CustomTabData=({columns,data,onRow,setSearch,options,onchange,setFilterDate,setFilterState,search,isLoading})=>{
   
     const datePikerHandler = (value, dateStrings) => {
     
     setFilterDate(dateStrings);
    };
    if(isLoading && search=="" ) return <CustomLoader/>
    return(
        <>
         <div className="">
            <div className="flex flex-wrap gap-2 justify-between py-2">
            <CustomSearch  onchange={(e)=>setSearch(e.target.value)}/>
                <RangePicker onChange={datePikerHandler} />
            <CustomFiter setFilterState={setFilterState}   options={options} />
            
        </div>
        <CustomTable
        onRow={onRow}
        scroll={{x:1500}}
        columns={columns}
        dataSource={data}
      />
      </div>
        </>
    )
}
export default CustomTabData;