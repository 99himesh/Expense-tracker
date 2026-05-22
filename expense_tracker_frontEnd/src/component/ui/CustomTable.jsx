import { Table } from "antd"
import "./common.css"
const CustomTable=({dataSource,columns,scroll,onRow,rowSelection})=>{
    
  return(
    <div className="custom-table">
    <Table rowSelection={rowSelection}  scroll={scroll} pagination={false} dataSource={dataSource} columns={columns} onRow={onRow} />
    </div>
  )
}
export default CustomTable;