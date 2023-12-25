import React from "react";
import { Card, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import Image from "next/image";
interface DataType {
  key: React.Key;
  name: string;
  category: string;
  stock: number;
  price: number;
  orders: number;
  rating: number;
  createdAt: string;
  image: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Product",
    dataIndex: "image",
    key: "image",
    render: (_, { image, name }) => (
      <Image src={image} alt={name} width={40} height={40} />
    ),
  },
  {
    title: "",
    dataIndex: "name",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    // sorter: {
    //   compare: (a, b) => a.chinese - b.chinese,
    //   multiple: 3,
    // },
  },
  {
    title: "Orders",
    dataIndex: "orders",
    // sorter: {
    //   compare: (a, b) => a.math - b.math,
    //   multiple: 2,
    // },
  },
  {
    title: "Rating",
    dataIndex: "rating",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
  {
    title: "Action",
    dataIndex: "Action",
    // sorter: {
    //   compare: (a, b) => a.english - b.english,
    //   multiple: 1,
    // },
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Half Sleeve Round Neck T-Shirt",
    category: "Clothes",
    stock: 12,
    price: 115.0,
    orders: 48,
    rating: 4.2,
    createdAt: "2023-12-21",
    image:
      "https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533",
  },
  {
    key: "2",
    name: "Half Sleeve Round Neck T-Shirt",
    category: "Clothes",
    stock: 12,
    price: 115.0,
    orders: 48,
    rating: 4.2,
    createdAt: "2023-12-21",
    image:
      "https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533",
  },
  {
    key: "3",
    name: "Half Sleeve Round Neck T-Shirt",
    category: "Clothes",
    stock: 12,
    price: 115.0,
    orders: 48,
    rating: 4.2,
    createdAt: "2023-12-21",
    image:
      "https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533",
  },
  {
    key: "4",
    name: "Half Sleeve Round Neck T-Shirt",
    category: "Clothes",
    stock: 12,
    price: 115.0,
    orders: 48,
    rating: 4.2,
    createdAt: "2023-12-21",
    image:
      "https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533",
  },
];

const SellerDetailsPageTable = () => {
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ x: 700}}
      />
    </Card>
  );
};

export default SellerDetailsPageTable;
