import { useGetCategoryQuery } from "@/redux/category/categoryApi";
import React, { useState } from "react";
import CVBreadcrumb from "./partial/CVBreadcrumb";
import { Card, Row, Form, Button } from "antd";
import UpdateForm from "./partial/UpdateForm";
import Loader from "../ui/Loader";

const UpdateCategory = ({ categoryId }: any) => {
  /*//** RTK calling of category data getting */
  const {
    data: categoryData,
    isLoading: catQueryLoading,
  }: { data?: any; isLoading: boolean } = useGetCategoryQuery({
    id: categoryId,
  });

  // loading
  if (catQueryLoading) return <Loader />;

  return (
    <>
      <Card title="Update Category" style={{ boxShadow: "3px 3px 15px #ddd" }}>
        <UpdateForm data={categoryData?.data} categoryId={categoryId} />
      </Card>
    </>
  );
};

export default UpdateCategory;
