import { Spin, Table, Tag } from "antd";
import { ColumnType } from "antd/es/table";
import React from "react";

function OrderDetailsTable({ products, total_price, isLoading }: any) {

  const columns: Array<ColumnType<any>> = [
    {
      title: "Sr.",
      dataIndex: "sr",
      width: 200,
      render: (_text: any, _record: any, index: number) => {
        return `${index + 1}`;
      },
    },
    {
      title: "Product Name",
      dataIndex: "product_id",
      key: "product_id",
      render: (product_id: any) => product_id?.productName,
    },
    {
      title: "Quantity",
      dataIndex: "product_quantity",
      key: "product_quantity",
    },
    {
      title: "Unit Price",
      dataIndex: "product_price",
      key: "product_price",
      render: (product_price: any) => {
        return <span>${product_price}</span>;
      },
    },
    {
      title: "Price",
      align: 'right',
      width: '20%',
      dataIndex: "product_price",
      key: "product_price",
      render: (text: any, record: any) => {
        const { product_price, product_quantity } = record;
        return <span>${product_price * product_quantity}</span>;
      },
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} pagination={false} scroll={{ x: 1000 }} loading={isLoading && { indicator: <Spin /> }}
        footer={() =>
          <div>
            <p style={{ textAlign: "right", fontSize: "16px", fontWeight: "bold" }}>Total amount: ${total_price}</p>
          </div>
        } />
    </>
  );
}

export default OrderDetailsTable;
