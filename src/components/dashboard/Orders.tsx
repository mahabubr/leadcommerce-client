"use client";
import React from "react";
import style from "./static/dashboard.module.css";
import { Button, Table, Tag } from "antd";

const Orders = ({ data }: { data: any }) => {
  console.log(data?.ordersChart?.topOrders, "Order");
  const dataa = [
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color="blue">Pending</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color="yellow">Shipment</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color="green">Delivery</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color="red">Canceled</Tag>,
    },
  ];
  const columns = [
    {
      title: "Order Code",
      dataIndex: "order_code",
      key: "_id",
      render: (order_code: any, _id: any) => <p key={_id}>{order_code}</p>,
    },
    {
      title: "Total Item",
      dataIndex: "total_items",
      key: "_id",
      render: (total_items: any, _id: any) => <p key={_id}>{total_items}</p>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "_id",
      render: (amount: any, _id: any) => <p key={_id}>{amount}</p>,
    },
    {
      title: "Shipment Status",
      dataIndex: "shipment_status",
      key: "_id",
      render: (shipment_status: any, _id: any) => {
        return (
          <>
            {shipment_status === "pending" ? (
              <Tag color="warning">Pending</Tag>
            ) : shipment_status === "completed" ? (
              <Tag color="success">Completed</Tag>
            ) : shipment_status === "canceled" ? (
              <Tag color="error">Canceled</Tag>
            ) : null}
          </>
        );
      },
    },

    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "_id",
      render: (payment_status: any, _id: any) => {
        return (
          <>
            {payment_status === "pending" ? (
              <Tag color="warning">Pending</Tag>
            ) : payment_status === "completed" ? (
              <Tag color="success">Completed</Tag>
            ) : payment_status === "canceled" ? (
              <Tag color="error">Canceled</Tag>
            ) : null}
          </>
        );
      },
    },
  ];

  return (
    <div className={style.orders}>
      <h3 className={style.sales_head}>Recent Orders</h3>
      
      <Table
        columns={columns}
        dataSource={data?.ordersChart?.topOrders}
        scroll={{ x: 600 }}
      />
    </div>
  );
};

export default Orders;
