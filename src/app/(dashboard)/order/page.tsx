"use client";

import { Space, Input, Table, Tag, Select, DatePicker, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps } from "antd";
import { CiSearch } from "react-icons/ci";

import style from "./order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";

import { useEffect, useState } from "react";
import { useGetAllOrderQuery } from "@/redux/order/orderApi";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }

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
    title: "Total Quantity",
    dataIndex: "total_quantity",
    key: "_id",
    render: (total_quantity: any, _id: any) => (
      <p key={_id}>{total_quantity}</p>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "_id",
    render: (amount: any, _id: any) => <p key={_id}>{amount}</p>,
  },
  {
    title: "Order Status",
    dataIndex: "order_status",
    key: "_id",
    render: (order_status: any, _id: any) => {
      return (
        <>
          {order_status === "pending" ? (
            <Tag color='warning'>Pending</Tag>
          ) : order_status === "completed" ? (
            <Tag color='success'>Completed</Tag>
          ) : order_status === "canceled" ? (
            <Tag color='error'>Canceled</Tag>
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
            <Tag color='warning'>Pending</Tag>
          ) : payment_status === "completed" ? (
            <Tag color='success'>Completed</Tag>
          ) : payment_status === "canceled" ? (
            <Tag color='error'>Canceled</Tag>
          ) : null}
        </>
      );
    },
  },
];

// const dataaa: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

const Orders = () => {
  const query: any = {};

  // * state declaration
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4); // limit
  // const [sortBy, setSortBy] = useState("");
  // const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  query["limit"] = limit;
  query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;
  const { data } = useGetAllOrderQuery({ ...query });
  const orderData = data?.data;

  // * PageLimit Change
  const handlePagelimitChange = (value: any) => {
    setLimit(value);
  };

  // * Date Picker
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              size='middle'
              placeholder='Search Orders'
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.filterTwo}>
            <Select
              placeholder='Status'
              allowClear
              options={[
                { value: "active", label: "Active" },
                { value: "disabled", label: "Disabled" },
              ]}
            />
            <Select
              onChange={handlePagelimitChange}
              style={{ width: "100px", textTransform: "capitalize" }}
              options={productItemSortPage}
              defaultValue={productItemSortPage[0]}
              // defaultValue={selectedStatus}
            />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={orderData}
          scroll={{ x: true }}
          pagination={{
            current: page,
            pageSize: limit,
            total: data?.meta?.total,
            onChange: (page, pageSize) => {
              setLimit(pageSize);
              setPage(page);
            },
          }}
        />
      </div>

      <div className={style.sideContent}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter by</p>
        <div className={style.sideItems}>
          <div>
            <p style={{ fontSize: 12 }}>Order Id</p>
            <Input placeholder='Type Here' size='middle' />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Customer</p>
            <Input placeholder='Type Here' size='middle' />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Order Status</p>
            <Select
              placeholder='Status'
              allowClear
              options={[
                { value: "ordered", label: "Ordered" },
                { value: "rejected", label: "Ordered" },
              ]}
              style={{ marginTop: 10 }}
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Date</p>
            <DatePicker
              onChange={onChange}
              picker='month'
              style={{ marginTop: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
