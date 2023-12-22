// /* eslint-disable react-hooks/rules-of-hooks */
// "use client";
// import Table, { ColumnsType } from "antd/es/table";
// import { TableRowSelection } from "antd/es/table/interface";
// import { useState } from "react";

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
//   orders: string;
//   status: string;
// }

// const tableStyle = {
//   padding: "50px",
//   backgroundColor: "#E1DFDF",
//   borderRadious: "100px",
//   cursor: "pointer",
//   overflow: "auto", // Enable scrolling for overflow content
//   width: "100%",
//   // Adjust the value based on your requirement
// };

// const columns: ColumnsType<DataType> = [
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//   },
//   {
//     title: "Orders",
//     dataIndex: "orders",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//   },
// ];

// const data: DataType[] = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//     orders: `Watch. ${i}`,
//     status: `Pending`,
//   });
// }

// const page: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     console.log("selectedRowKeys changed: ", newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection: TableRowSelection<DataType> = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: "odd",
//         text: "Select Odd Row",
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }
//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: "even",
//         text: "Select Even Row",
//         onSelect: (changeableRowKeys: any[]) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }
//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };
//   return (
//     <Table
//       rowSelection={rowSelection}
//       columns={columns}
//       style={tableStyle}
//       dataSource={data}
//     />
//   );
// };

// export default page;

"use client";

import React, { useState } from "react";
// import CustomTable from '../ui/CustomTable';
import { Space, Input, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SizeType } from "antd/es/config-provider/SizeContext";

import style from "./order.module.css";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },

  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Orders = () => {
  const [size, setSize] = useState<SizeType>("large");

  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input placeholder="Basic usage" size="large" />
          </div>
          <div className={style.filterTwo}>
            <Input placeholder="Basic usage" size="large" />
            <Input placeholder="Basic usage" size="large" />
          </div>
        </div>

        <Table columns={columns} dataSource={data} />
      </div>

      <div className={style.sideContent}>
        <h3>Filter by</h3>
        <div className={style.sideItems}>
          <Input placeholder="Basic usage" size="large" />
          <Input placeholder="Basic usage" size="large" />
          <Input placeholder="Basic usage" size="large" />
          <Input placeholder="Basic usage" size="large" />
          <Input placeholder="Basic usage" size="large" />
          <Input placeholder="Basic usage" size="large" />
        </div>
      </div>
    </div>
  );
};

export default Orders;
