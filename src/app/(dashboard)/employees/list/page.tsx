/* eslint-disable @next/next/no-img-element */
"use client";

import { Space, Input, Table, Tag, Select, DatePicker, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { DatePickerProps } from "antd";
import { CiSearch } from "react-icons/ci";

import style from "../../order/order.module.css";

interface DataType {
  _id: string;
  image: string;
  full_name: string;
  position: string;
  email: string;
  phone: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text) =>(
        text?<img width={'60px'} src={text} alt='employe'/>:<img width={"60px"} alt='employe' src={'https://kwikshift.co.nz/wp-content/uploads/2018/02/Kwikshift-Staff-Placeholder.jpg'}/>
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
    render: (_, record) => <Button type="primary">Edit</Button>,
  },
];

const data: DataType[] = [
  {
    _id: "1",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  },
  {
    _id: "2",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  },
  {
    _id: "3",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  },
  {
    _id: "4",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  },
  {
    _id: "5",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  },
  {
    _id: "6",
    image:'',
    full_name: "John Brown",
    position: "Worker",
    email: "example@gmail.com",
    phone: '0135661445',
  }
];

const EmployeePage = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              size="middle"
              placeholder="Search Employees"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>

      <div className={style.sideContent}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter by</p>
        <div className={style.sideItems}>
          <div>
            <p style={{ fontSize: 12 }}>Name</p>
            <Input placeholder="Type Here" type="text" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Email</p>
            <Input placeholder="Type Here" type="email" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Phone</p>
            <Input placeholder="Type Here" type="text" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Position</p>
            <Input placeholder="Type Here" type="text" size="middle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
