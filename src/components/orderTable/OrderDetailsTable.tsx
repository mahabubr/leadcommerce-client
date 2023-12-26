import { Table, Tag } from "antd";
import React from "react";

function OrderDetailsTable() {
  const data = [
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color='blue'>Pending</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color='yellow'>Shipment</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color='green'>Delivery</Tag>,
    },
    {
      orderId: 2535,
      Product: "Dummy Name",
      unit: 150,
      date: "Oct 20, 2018",
      cost: 15,
      status: <Tag color='red'>Canceled</Tag>,
    },
  ];
  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Product Name",
      dataIndex: "Product",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "unit",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "Quantity",
      dataIndex: "cost",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: "status",
      dataIndex: "status",
      key: "name",
      // render: (text) => <a>{text}</a>,
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data}  scroll={{ x: 1000}} />
    </>
  );
}

export default OrderDetailsTable;
