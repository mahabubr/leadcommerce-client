"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Flex,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  ProductDataType,
  productData,
  productItemSort,
  productItemSortPage,
} from "./utils/productData";
import { useRouter } from "next/navigation";
import PVBreadcrumb from "./partials/PVBreadcrumb";
import SearchKeyword from "./partials/SearchKeyword";
import CategoryFilterBox from "./partials/CategoryFilterBox";
import PriceRangeFilterBox from "./partials/PriceRangeFilterBox";

const ViewProducts = () => {
  // global
  const router = useRouter();

  // states
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  // const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // data columns
  const columns: ColumnsType<ProductDataType> = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, { image, title }) => (
        <Image src={image} alt={title} width={60} height={60} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => <>৳ {price} </>,
    },
    {
      title: "In Stock",
      key: "inStock",
      dataIndex: "inStock",
      render: (_, { inStock }) =>
        inStock ? (
          <Tag color="green">In Stock</Tag>
        ) : (
          <Tag color="red">Stock Out</Tag>
        ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, { _id }) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleRouteUpdate(_id)}
          >
            Edit
          </Button>
          <Button icon={<DeleteOutlined />} onClick={handleDeleteProduct}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  // product select
  const onSelectChange = (newSelectedRowKeys: React.Key[]) =>
    setSelectedRowKeys(newSelectedRowKeys);

  // routing action
  const handleRouteUpdate = (_id: string) =>
    router.push(`/products/update/${_id}`);

  // delete action
  const handleDeleteProduct = () => {};

  return (
    <>
      <PVBreadcrumb />

      <div style={{ marginTop: "20px" }}>
        {/* <SearchFilterBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                /> */}

        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col className="gutter-row" span={18}>
            <Card bordered>
              <Flex
                align="center"
                style={{ marginBottom: "25px" }}
                justify="space-between"
              >
                <h2>All Products</h2>

                <Flex gap={10}>
                  <Select
                    size="large"
                    placeholder="Sort"
                    // onChange={handleStatusChange}
                    style={{ width: "100px", textTransform: "capitalize" }}
                    options={productItemSort}
                    // defaultValue={selectedStatus}
                  />

                  <Select
                    size="large"
                    // onChange={handleStatusChange}
                    style={{ width: "100px", textTransform: "capitalize" }}
                    options={productItemSortPage}
                    defaultValue={productItemSortPage[0]}
                    // defaultValue={selectedStatus}
                  />
                </Flex>
              </Flex>

              <Table columns={columns} dataSource={productData} />
            </Card>
          </Col>

          <Col className="gutter-row" span={6}>
            <Space direction="vertical" size={24} style={{ width: "100%" }}>
              <Collapse
                collapsible="header"
                defaultActiveKey={["1"]}
                expandIconPosition="right"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f0f0f0",
                }}
                bordered={false}
                items={[
                  {
                    key: "1",
                    label: <div style={{ fontWeight: "500" }}>Keywords</div>,
                    children: <SearchKeyword />,
                  },
                ]}
              />

              <Collapse
                collapsible="header"
                defaultActiveKey={["2"]}
                expandIconPosition="right"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f0f0f0",
                }}
                bordered={false}
                items={[
                  {
                    key: "2",
                    label: <div style={{ fontWeight: "500" }}>Categories</div>,
                    children: <CategoryFilterBox />,
                  },
                ]}
              />

              <Collapse
                collapsible="header"
                defaultActiveKey={["3"]}
                expandIconPosition="right"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f0f0f0",
                }}
                bordered={false}
                items={[
                  {
                    key: "3",
                    label: <div style={{ fontWeight: "500" }}>Price</div>,
                    children: <PriceRangeFilterBox />,
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ViewProducts;
