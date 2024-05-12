import React, { useEffect } from "react";
import { Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser, getOrders } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getUserId = location.pathname.split("/")[3] ;
  useEffect(() => {

    dispatch(getOrderByUser());
  }, [getUserId]);
  const orderState = useSelector((state) => state.auth.orderByUser[0].products);
  const data1 = [];
  for (let i = 0; i < orderState.length; i++) {
    data1.push({
      key: i + 1,
      name: orderState[i].product.title,
      brand: orderState[i].product.brand,
      count: orderState[i].count,
      amount: orderState[i].product.price,
      color: orderState[i].product.color,
      date: orderState[i].product.createdAt,
      action: (
        <>
          <Link className=" fs-3 text-danger" to="/">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
  }
  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default ViewOrder;
