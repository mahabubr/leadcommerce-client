"use client";
import React from "react";
import style from "./static/dashboard.module.css";
import { Table, Tag } from "antd";

const data = [
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="blue">Pending</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="yellow">Shipment</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="green">Delivery</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="red">Canceled</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="blue">Pending</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="yellow">Shipment</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="green">Delivery</Tag>,
  },
  {
    orderId: 2535,
    product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color="red">Canceled</Tag>,
  },
];

const thead = [
  "Shop Id",
  "Product Name",
  "Price",
  "Date",
  "Quantity",
  "Status",
];

const columns = [
    {
      title: "Store Id",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Product Name",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Price",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    
  ];
const Orders = () => {
  return (
    <div className={style.orders}>
      <h3 className={style.sales_head}>Recent Orders</h3>
      <table className={style.table}>
        <tbody className={style.tbody}>
          <tr className={style.thead}>
            {thead.map((item) => (
              <th className={style.th} key={item}>
                {item}
              </th>
            ))}
          </tr>
          {data.map((item, i) => (
            <tr key={i} className={style.tr}>
              <td className={style.td}>{item.orderId}</td>
              <td className={style.td}>{item.product}</td>
              <td className={style.td}>{item.unit}</td>
              <td className={style.td}>{item.date}</td>
              <td className={style.td}>{item.cost}</td>
              <td className={style.td}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
