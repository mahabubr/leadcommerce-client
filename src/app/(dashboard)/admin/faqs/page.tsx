"use client";
import {
  Input,
  Table,
  Select,
  DatePicker,
  Button,
} from "antd";
import { CiSearch } from "react-icons/ci";
import style from "../../order/order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";
import useFaqsLogic from "./useFaqsLogic";
import { current } from "@reduxjs/toolkit";

const { Search } = Input;

const Faqs = () => {
  const  {saveAnsLoader,editableDocument,saveAns,handleChangeAns,isLoading,setUpdateStatus,handlePagelimitChange,page,limit,data,setLimit,setPage,onSearch,handleChange,onChange}=useFaqsLogic();

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
      render:(ans:string,data:any)=>(
        <Input
          name="ans"
          defaultValue={ans}
          placeholder="Add a ans"
          onChange={(e)=>{handleChangeAns(e,data['_id'])}}
        />
      )
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
      render:(id:string,data:any)=>(
        <Button
          onClick={()=>saveAns(id)}
          loading={(editableDocument?.['current']===id && saveAnsLoader) || false}
        >Save</Button>
      )
    }
    
  ];

  // * Filtering and Searching
  
  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              size="middle"
              placeholder="Search Faqs"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.filterTwo}>
            <Select
              onChange={handlePagelimitChange}
              style={{ width: "100px", textTransform: "capitalize" }}
              options={productItemSortPage}
              defaultValue={productItemSortPage[0]}
              // defaultValue={selectedStatus}
            />
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Faqs;
