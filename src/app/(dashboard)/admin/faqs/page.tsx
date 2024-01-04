"use client";
import { Input, Table, Select, DatePicker, Button, Card } from "antd";
import { CiSearch } from "react-icons/ci";
import style from "./order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";
import useFaqsLogic from "./useFaqsLogic";

const Faqs = () => {
  const {
    saveAnsLoader,
    editableDocument,
    saveAns,
    handleChangeAns,
    isLoading,
    setUpdateStatus,
    handlePagelimitChange,
    page,
    limit,
    data,
    setLimit,
    setPage,
    onSearch,
    handleChange,
    onChange,
  } = useFaqsLogic();

  // * Table Columns
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ans",
      dataIndex: "ans",
      key: "ans",
      render: (ans: string, data: any) => (
        <Input
          name="ans"
          defaultValue={ans}
          placeholder="Add a ans"
          onChange={(e) => {
            handleChangeAns(e, data["_id"]);
          }}
        />
      ),
    },
    {
      title: "User Id",
      dataIndex: "user_id",
      key: "user_id",
    },
    {
      title: "Save",
      dataIndex: "_id",
      key: "_id",
      render: (id: string, data: any) => (
        <Button
          onClick={() => saveAns(id)}
          loading={
            (editableDocument?.["current"] === id && saveAnsLoader) || false
          }
        >
          Save
        </Button>
      ),
    },
  ];

  // * Filtering and Searching

  return (
    <div>
      <Card
        title="Frequently Ask Question"
        style={{ boxShadow: "3px 3px 15px #ddd" }}
        extra={
          <div>
            <Input
              size="middle"
              placeholder="Search Faqs"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
        }
      >
        <Table
          columns={columns}
          dataSource={data?.data || []}
          scroll={{ x: 700 }}
          loading={isLoading}
          pagination={{
            current: page,
            pageSize: limit,
            total: data?.meta?.total,
            onChange: (page, pageSize) => {
              setLimit(pageSize);
              setPage(page);
            },
          }}
        />
      </Card>
    </div>
  );
};

export default Faqs;
