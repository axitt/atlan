import React from 'react';
import '../App.css';
import {CSVLink} from "react-csv"
import { Table, Button } from 'antd';

//attribute heading
const columns = [
  {
    title: 'productID',
    width: 100,
    dataIndex: 'productID',
    key: 'productID',
    fixed: 'left',
    align: 'center',
  },
  {
    title: 'productName',
    width: 200,
    dataIndex: 'productName',
    key: 'productName',
    fixed: 'left',
  },
  {
    title: 'supplierID',
    dataIndex: 'supplierID',
    key: 'supplierID',
    width: 150,
    align: 'center'
  },
  {
    title: 'categoryID',
    dataIndex: 'categoryID',
    key: 'categoryID',
    width: 150,
    align: 'center'
  },
  {
    title: 'quantityPerUnit',
    dataIndex: 'quantityPerUnit',
    key: 'quantityPerUnit',
    width: 150,
    align: 'center',
  },
  {
    title: 'unitPrice',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    width: 150,
    align: 'center',
    sorter: (a, b) => a.unitPrice - b.unitPrice,
  },
  {
    title: 'unitsInStock',
    dataIndex: 'unitsInStock',
    key: 'unitsInStock',
    width: 150,
    align: 'center',
    sorter: (a, b) => a.unitsInStock - b.unitsInStock,
  },
  {
    title: 'unitsOnOrder',
    dataIndex: 'unitsOnOrder',
    key: 'unitsOnOrder',
    width: 150,
    align: 'center',
    sorter: (a, b) => a.unitsOnOrder - b.unitsOnOrder,
  },
  {
    title: 'reorderLevel',
    dataIndex: 'reorderLevel',
    key: 'reorderLevel',
    width: 150,
    align: 'center'
  },
  {
    title: 'discontinued',
    dataIndex: 'discontinued',
    key: 'discontinued',
    width:150,
    align: 'center'
  }
];
//-------

//sort attribute
const onChange = (sorter) => {
    console.log('params', sorter);
  };
//-------


const TableResult = ({data}) => (
    <>
      <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 400,
    }}
    onChange={onChange}
  />
  <div style={{margin:'10px 0',display:'flex',justifyContent:'center'}}>
    <CSVLink filename={"product.csv"} data={data}>
       <Button type="primary">Export CSV<i class="fa fa-download"></i></Button>
    </CSVLink>
  </div>      
    </>

);

export default TableResult;