
import React from 'react';
import { Tabs } from 'antd';
const CustomTabs=({item,onchange,defaultActiveKey})=>{
    return(
        <>
        <Tabs defaultActiveKey={defaultActiveKey} items={item} onChange={onchange} />
        </>
    )
}
export default CustomTabs;