import React from 'react';
import '../App.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

//Navbar
function Nav(){
    return (<Header>
      <div style={{ color: '#fff'}}><i class="fa fa-database"></i> SQL Editor</div>
      <Menu
        theme="dark"
        mode="horizontal"
      />
    </Header> )
}
//-------

export default Nav;