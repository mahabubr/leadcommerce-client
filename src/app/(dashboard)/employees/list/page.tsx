/* eslint-disable @next/next/no-img-element */
"use client";

import { Input, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { CiSearch } from "react-icons/ci";

import style from "../../order/order.module.css";
import useList from "./useList";
import { DataType, IProps } from "./list.type";

const columns: ColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text) =>
      text ? (
        <img width={"60px"} src={text} alt="employe" />
      ) : (
        <img
          width={"60px"}
          alt="employe"
          src={
            "https://kwikshift.co.nz/wp-content/uploads/2018/02/Kwikshift-Staff-Placeholder.jpg"
          }
        />
      ),
  },
  {
    title: "Name",
    dataIndex: "full_name",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Button type="primary" danger>
        Delete
      </Button>
    ),
  },
];

const EmployeePage = () => {
  const {
    handleKeyDown,
    handleOnChange,
    data,
    isLoading,
    paginationConfig,
    onTableChange,
  } = useList();

  return (
    <div className={style.container} style={{ marginTop: 40 }}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
              size="middle"
              placeholder="Search Employees"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
              name="searchTerm"
            />
          </div>
        </div>

        <Table
          pagination={paginationConfig}
          onChange={onTableChange}
          loading={isLoading}
          columns={columns}
          dataSource={data}
        />
      </div>

      <div className={style.sideContent}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter by</p>
        <div className={style.sideItems}>
          <div>
            <p style={{ fontSize: 12 }}>Email</p>
            <Input
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
              name="email"
              placeholder="Type Here"
              type="email"
              size="middle"
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Phone</p>
            <Input
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
              name="phone"
              placeholder="Type Here"
              type="text"
              size="middle"
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Position</p>
            <Input
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
              name="position"
              placeholder="Type Here"
              type="text"
              size="middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
