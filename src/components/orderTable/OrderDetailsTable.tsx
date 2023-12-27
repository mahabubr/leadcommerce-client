import { Table, Tag } from "antd";
import React from "react";

function OrderDetailsTable({ products }: any) {
  const columns = [
    {
      title: "Order Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "product_id",
      key: "product_id",
      render: (product_id: any) => product_id.productName,
    },
    {
      title: "Price",
      dataIndex: "product_price",
      key: "product_price",
    },

    {
      title: "Quantity",
      dataIndex: "product_quantity",
      key: "product_quantity",
    },
    {
      title: "Date",
      dataIndex: "product_id",
      key: "product_id",
      render: (product_id: any) =>
        new Date(product_id.updatedAt).toDateString(),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} scroll={{ x: 1000 }} />
    </>
  );
}

export default OrderDetailsTable;
