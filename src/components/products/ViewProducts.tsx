"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Collapse,
  Flex,
  Spin,
  Row,
  Select,
  Space,
  Table,
  Typography,
  Modal,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { ENUM_PRODUCT_STATUS } from "@/config/constants/product";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
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
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/product/productApi";
const { Text } = Typography;
const { confirm } = Modal;
import "./styles/vproduct.css";
import ButtonGroup from "antd/es/button/button-group";
import style from "../../app/(dashboard)/order/order.module.css";
import ChartDetails from "./partials/Chart";
import { useGetStoreDashboardDataQuery } from "@/redux/store/storeApi";

const ViewProducts = () => {
  //** hanlding pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(4);
  const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">(
    "asc"
  );
  const [search, setSearch] = useState<string>("");

  /*//** RTK calling of product data getting */
  const { data: productData, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllProductsQuery({
      limit: currentLimit,
      page: currentPage,
      product_status: "active",
      sortOrder: currentSortOrder,
      searchTerm: search,
    });

  const [
    deleteProduct,
    { data: deleteResponse, error: deleteError, isLoading: deleteIsLoading },
  ] = useDeleteProductMutation();

  /* //**Product page list size */
  const handleProductPage = (value: any) => {
    setCurrentLimit(parseInt(value));
  };

  /* //**Product page list sorting */
  const handleProductListsorting = (value: any) => {
    setCurrentSortOrder(value);
  };

  //* chart data showing 
  const { data: dashboardData } = useGetStoreDashboardDataQuery({});


  // global
  const router = useRouter();

  // states
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  // const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
  // const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // data columns

  console.log(search)
  const columns: ColumnsType<ProductDataType> = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, { image, productName }) => (
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
      render: (_, { price }) => <div className="priceField">৳ {price} </div>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_, { quantity }) => <>{quantity} pice </>,
    },
    {
      title: "In Stock",
      key: "quantity",
      dataIndex: "quantity",
      render: (_, { quantity }) => (
        <Text>
          {quantity! > 0 ? (
            <Tag color="green">In Stock</Tag>
          ) : (
            <Tag color="red">Out of Stock</Tag>
          )}
        </Text>
      ),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <Text>
          {status === ENUM_PRODUCT_STATUS.PENDING ? (
            <Tag color="gold"> {status}</Tag>
          ) : status === ENUM_PRODUCT_STATUS.ACTIVE ? (
            <Tag color="error"> {status}</Tag>
          ) : (
            <Tag color="lime"> {status}</Tag>
          )}
        </Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, { _id }) => (
        <ButtonGroup>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleRouteUpdate(_id)}
          >
            Edit
          </Button>
          <Button icon={<DeleteOutlined />} onClick={() => showConfirm(_id)}>
            Delete
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  // product select
  const onSelectChange = (newSelectedRowKeys: React.Key[]) =>
    setSelectedRowKeys(newSelectedRowKeys);

  // routing action
  const handleRouteUpdate = (_id: string) =>
    router.push(`/products/update/${_id}`);

  // **delete action
  const handleDeleteProduct = (_id: string | undefined) => {
    Modal.destroyAll();
    console.log(_id);
    deleteProduct(_id);
  };

  const showConfirm = (_id: string | undefined) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      title: "Delete Category",
      content: "Are you sure to delete this category?",
      centered: true,
      okText: "Delete", // Change the text of the OK button
      cancelText: "Cancel", // Change the text of the Cancel button
      onOk() {
        handleDeleteProduct(_id);
      },
      onCancel() {
        console.log("Cancel");
      },
      okButtonProps: {
        style: { backgroundColor: "#2c3e50", borderColor: "#2c3e50" },
      },
      cancelButtonProps: {},
    });
  };

  return (
    <>
      <PVBreadcrumb />

      <div style={{ marginTop: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col
            className="gutter-row"
            xs={{ span: 24, order: 2 }}
            md={{ span: 18, order: 1 }}
          >
            <Card bordered className="pTable">
              <Flex
                align="center"
                style={{ marginBottom: "25px", gap: "20px" }}
              >
                <p>All Products</p>

                {/* //**Product page list sorting */}
                <Select
                  size="large"
                  placeholder="Sort"
                  onChange={handleProductListsorting}
                  style={{ width: "100px", textTransform: "capitalize" }}
                  options={productItemSort}
                  defaultValue={productItemSort[0]}
                />
                {/* //**product page list size */}
                <Select
                  size="large"
                  onChange={handleProductPage}
                  style={{ width: "100px", textTransform: "capitalize" }}
                  options={productItemSortPage}
                  defaultValue={productItemSortPage[0]}
                />
              </Flex>

              {/* //**product table */}
              <Table
                columns={columns}
                dataSource={productData?.data}
                rowKey="_id"
                scroll={{ x: true }}
                pagination={{
                  current: currentPage,
                  pageSize: currentLimit,
                  total: productData?.meta?.total,
                  onChange: (page, pageSize) => {
                    setCurrentPage(page);
                    setCurrentLimit(pageSize);
                  },
                }}
                rowSelection={{
                  selectedRowKeys,
                  onChange: onSelectChange,
                }}
                loading={isLoading && { indicator: <Spin /> }}
              />
            </Card>
          </Col>

          <Col className="gutter-row" xs={{ span: 24, order: 1 }} md={6}>
            <Space direction="vertical" size={24} style={{ width: "100%" }}>
              <Collapse
                collapsible="header"
                defaultActiveKey={["43"]}
                expandIconPosition="right"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #f0f0f0",
                }}
                bordered={false}
                items={[
                  {
                    key: "43",
                    label: <div style={{ fontWeight: "500" }}>Product Order Summary</div>,
                    children: <ChartDetails chartData={dashboardData} />,
                  },
                ]}
              />
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
                    children: <SearchKeyword setSearch={setSearch} />,
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
