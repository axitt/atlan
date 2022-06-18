import React, {useState} from 'react';
import '../App.css';
import { Layout, Menu } from 'antd';
import { queryList} from '../utils/queryResults';

const { Sider } = Layout;

//left drawer
export default function LeftDrawer({query,setQuery,toggleRes,setToggleRes}){
  
  //get query by menu items & toggle table result 
  const onClick = (e) => {
    setQuery(e.key);
    setToggleRes(false);
  };
  //------

    return (
        <Sider
        width={350}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{color:'white', 'text-align':'center', 'margin':'19px 0'}}>Select your Query</div>
          <Menu
            theme="dark"
            mode="inline"
            onClick={onClick}
            defaultSelectedKeys={['select * from product;']}
            items={queryList.map(
              (item) => ({
                key: item.query,
                label: item.query,
              }),
            )}
          />
        </Sider>
    )
}
//-------

