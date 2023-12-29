"use client";
import React from "react";
import style from "./static/dashboard.module.css";
import { Button, Table, Tag } from "antd";

// const data = [
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="blue">Pending</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="yellow">Shipment</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="green">Delivery</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="red">Canceled</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="blue">Pending</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="yellow">Shipment</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="green">Delivery</Tag>,
//   },
//   {
//     orderId: 2535,
//     Product: "Dummy Name",
//     unit: 150,
//     date: "Oct 20, 2018",
//     cost: 15,
//     status: <Tag color="red">Canceled</Tag>,
//   },
// ];

// const thead = [
//   "Shop Id",
//   "Product Name",
//   "Price",
//   "Date",
//   "Quantity",
//   "Status",
// ];
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
    // {
    //   title: "Total Quantity",
    //   dataIndex: "total_quantity",
    //   key: "_id",
    //   render: (total_quantity: any, _id: any) => (
    //     <p key={_id}>{total_quantity}</p>
    //   ),
    // },
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
    //  {
    //    title: "Details",
    //    dataIndex: "",
    //    key: "_id",
    //    render: (_: any, { _id }: { _id: any }) => {
    //      return (
    //        <>
    //          <Button
    //            type='text'
    //            size='small'
    //            style={{ textDecoration: "underline" }}
    //            onClick={() => handleRouteUpdate(_id)}>
    //            Details
    //          </Button>
    //        </>
    //      );
    //    },
    //  },
  ];

  return (
    <div className={style.orders}>
      <h3 className={style.sales_head}>Recent Orders</h3>
      {/* <table className={style.table}>
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
              <td className={style.td}>{item.Product}</td>
              <td className={style.td}>{item.unit}</td>
              <td className={style.td}>{item.date}</td>
              <td className={style.td}>{item.cost}</td>
              <td className={style.td}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <Table
        columns={columns}
        dataSource={data?.ordersChart?.topOrders}
        scroll={{ x: 600 }}
      />
    </div>
  );
};

export default Orders;
