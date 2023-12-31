"use client";
import React, { useState } from "react";
import CVBreadcrumb from "./partial/CVBreadcrumb";
import {
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/category/categoryApi";
import Table, { ColumnsType } from "antd/es/table";
import { ICategory } from "./utils/categoryInterface";
import { ENUM_CATEGORY_STATUS } from "./utils/categoryConstant";
import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Space,
  Spin,
  Tag,
  Typography,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./style/vcategory.css";
import ButtonGroup from "antd/es/button/button-group";
import Loader from "../ui/Loader";

const { Text } = Typography;
const { confirm } = Modal;

const ViewCategory = () => {
  // global
  const router = useRouter();

  // states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">(
    "asc"
  );

  /*//** RTK calling of category data getting */
  const { data: categoryData, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllCategoriesQuery({
      limit: currentLimit,
      page: currentPage,
      // product_status: "active",
      sortOrder: currentSortOrder,
    });
  const [
    deleteCategory,
    { data: deleteResponse, error: deleteError, isLoading: deleteIsLoading },
  ] = useDeleteCategoryMutation();

  // data columns
  const columns: ColumnsType<ICategory> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <Text
          style={{
            textAlign: "center",
            padding: "4px 15px",
            borderRadius: "25px",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          {status === ENUM_CATEGORY_STATUS.INACTIVE ? (
            <Tag color="geekblue">{status}</Tag>
          ) : status === ENUM_CATEGORY_STATUS.ACTIVE ? (
            <Tag color="green">{status}</Tag>
          ) : (
            <Tag color="error">{status}</Tag>
          )}
        </Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      width: "20%",
      render: (_, { _id }) => (
        <ButtonGroup>
          <Button
            size="middle"
            type="primary"
            icon={<EditOutlined />}
            onClick={() => router.push(`/admin/category/update/${_id}`)}
          >
            Edit
          </Button>
          <Button
            size="middle"
            icon={<DeleteOutlined />}
            onClick={() => showConfirm(_id)}
          >
            Delete
          </Button>
        </ButtonGroup>
      ),
    },
  ];

  // **delete action
  const handleDeleteCategory = (_id: string | undefined) => {
    Modal.destroyAll();
    deleteCategory(_id);
  };

  // confirm modal
  const showConfirm = (_id: string | undefined) => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      title: "Delete Category",
      content: "Are you sure to delete this category?",
      centered: true,
      okText: "Delete", // Change the text of the OK button
      cancelText: "Cancel", // Change the text of the Cancel button
      onOk() {
        handleDeleteCategory(_id);
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
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col className="gutter-row" span={24}>
          <Card
            title="Create Category"
            style={{ boxShadow: "3px 3px 15px #ddd" }}
          >
            {/* //**product table */}
            <Table
              style={{ marginTop: "1vw" }}
              columns={columns}
              dataSource={categoryData?.data}
              rowKey="_id"
              scroll={{ x: true }}
              pagination={{
                current: currentPage,
                pageSize: currentLimit,
                defaultCurrent: 1,
                pageSizeOptions: ["5", "10", "20"],
                total: categoryData?.meta?.total,
                onChange: (page, pageSize) => {
                  setCurrentPage(page);
                  setCurrentLimit(pageSize);
                },
                onShowSizeChange: (current, size) => {
                  setCurrentPage(current);
                  setCurrentLimit(size);
                },
                showSizeChanger: true,
              }}
              loading={isLoading && { indicator: <Loader /> }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ViewCategory;
