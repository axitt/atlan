import React from 'react';
import '../App.css';
import { Table } from 'antd';


const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
    width:150,
  }
];

const data = [
    {
      'key': '1',
      'name': 'Mike',
      'age': 32,
      'address': '10 Downing Street',
    },
    {
      'key': '2',
      'name': 'John',
      'age': 42,
      'address': '10 Downing Street',
    }
  ];

const TableResult = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
      y: 300,
    }}
  />
);

export default TableResult;