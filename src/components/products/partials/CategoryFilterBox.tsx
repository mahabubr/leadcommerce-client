import React from "react";
import PCheckbox from "./PCheckbox";
import { Space } from "antd";
import { useGetAllCategoriesQuery } from "@/redux/category/categoryApi";

type Props = {};

const CategoryFilterBox = (props: Props) => {
  const { data, isLoading } = useGetAllCategoriesQuery({
    limit: 5,
    page: 1,
    // product_status,
    sortOrder: "asc",
  });
  console.log(data);

  return (
    <Space
      direction="vertical"
      size={14}
      style={{
        marginTop: "10px",
      }}
    >
      <PCheckbox label="All" />
      <PCheckbox label="Accessories" />
      <PCheckbox label="Phone" />
      <PCheckbox label="Headphone" />
      <PCheckbox label="Camera" />
    </Space>
  );
};

export default CategoryFilterBox;
