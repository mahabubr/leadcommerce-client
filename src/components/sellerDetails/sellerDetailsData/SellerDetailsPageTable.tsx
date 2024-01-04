import React from "react";
import { Card, Table, Tag } from "antd";
import Image from "next/image";
import { useGetSingleProductsForStoreQuery } from "@/redux/product/productApi";
import Loader from "@/components/ui/Loader";
import { ENUM_PRODUCT_STATUS } from "@/config/constants/product";

const columns: any = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (_: any, { image, productName }: any) => (
      <Image
        src={image?.avatar ? image?.avatar : "/preview.jpg"}
        alt={productName}
        width={60}
        height={60}
      />
    ),
  },
  {
    title: "Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (_: any, { price }: any) => (
      <div className="priceField">৳ {price} </div>
    ),
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (_: any, { quantity }: any) => <>{quantity} pice </>,
  },
  {
    title: "In Stock",
    key: "quantity",
    dataIndex: "quantity",
    render: (_: any, { quantity }: any) => (
      <>
        {quantity! > 0 ? (
          <Tag color="green">In Stock</Tag>
        ) : (
          <Tag color="red">Out of Stock</Tag>
        )}
      </>
    ),
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_: any, { status }: any) => (
      <>
        {status === ENUM_PRODUCT_STATUS.PENDING ? (
          <Tag color="gold"> {status}</Tag>
        ) : status === ENUM_PRODUCT_STATUS.ACTIVE ? (
          <Tag color="error"> {status}</Tag>
        ) : (
          <Tag color="lime"> {status}</Tag>
        )}
      </>
    ),
  },
];

const SellerDetailsPageTable = ({ id }: any) => {
  const { data: productData, isLoading }: { data?: any; isLoading: boolean } =
    useGetSingleProductsForStoreQuery({ id });

  const products = productData?.data;

  if (isLoading) return <Loader />;

  return (
    <Card
      title="Latest Products"
      style={{ boxShadow: "3px 3px 15px #ddd", marginTop: 20 }}
    >
      <Table
        columns={columns}
        dataSource={products}
        scroll={{ x: 700 }}
        pagination={false}
      />
    </Card>
  );
};

export default SellerDetailsPageTable;
