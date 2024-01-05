"use client";
import React from "react";
import { Card, Table, Tag } from "antd";

const Orders = ({ data }: { data: any }) => {
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
    <Card title="Recent Orders">
      <Table
        columns={columns}
        dataSource={data?.ordersChart?.topOrders}
        scroll={{ x: 600 }}
      />
    </Card>
  );
};

export default Orders;
