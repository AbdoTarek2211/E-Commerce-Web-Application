import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from '@ant-design/charts';
import { Table } from 'antd';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
    const data = [
      { Month: 'Jan', Income: 0.16 },
      { Month: 'Feb', Income: 0.125 },
      { Month: 'Mar', Income: 0.24 },
      { Month: 'April', Income: 0.19 },
      { Month: 'May', Income: 0.22 },
      { Month: 'June', Income: 0.05 },
      { Month: 'July', Income: 0.01 },
      { Month: 'Aug', Income: 0.015 },
      { Month: 'Sep', Income: 0.015 },
      { Month: 'Oct', Income: 0.015 },
      { Month: 'Nov', Income: 0.015 },
      { Month: 'Dec', Income: 0.015 },
    ];

    const config = {
      data,
      xField: 'Month',
      yField: 'Income',
      style: {
        fill: ({ type }) => {
          return '#ffd333';
        },
      },
      Meta: {
        type: {
          alias: "Month",
        },
        value: {
          alias: "Income",
        },
      },
      label: {
        text: (originData) => {
          const val = parseFloat(originData.value);
          if (val < 0.05) {
            return (val * 100).toFixed(1) + '%';
          }
          return '';
        },
        offset: 10,
      },
      legend: false,
      
    };

    return (
      <div>
            <h3 className='mb-4 title'>Dashboard</h3>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p> 
                        <h4 className='mb-0 sub-title'>$1100</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6><BsArrowDownRight />32%</h6>
                        <p className='mb-0 desc'>Compare To April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p> 
                        <h4 className='mb-0 sub-title'>$1100</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='red'>
                            <BsArrowDownRight />32%
                        </h6>
                        <p className='mb-0 desc'>Compare To April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3'>
                    <div>
                        <p className='desc'>Total</p> 
                        <h4 className='mb-0 sub-title'>$1100</h4>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'>
                            <BsArrowDownRight />32%
                        </h6>
                        <p className='mb-0 desc'>Compare To April 2022</p>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h3 className='mb-5 title'>Income Statics</h3>
                <div>
                     <Column {...config} />;
                </div>
            </div>
            <div className='mt-4'>
              <h3 className='mb-5 title'>Recent Orders</h3>
              <div>
              <Table columns={columns} dataSource={data1} />
              </div>
            </div>
        </div>
    )
}

export default Dashboard