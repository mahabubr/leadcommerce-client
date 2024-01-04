"use client";

import React, { useState } from "react";
import style from "./static/userpage.module.css";
import { Card, Pagination, Spin } from "antd";
import { useGetAllEmployesQuery } from "@/redux/employees/employeesApi";
import EmployeeCart from "@/components/users/EmployeeCart";

const AllUsers = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllEmployesQuery({
    ...query,
  });
  const employeeData = data && data?.data;

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };

  return (
    <Card title="All employees" style={{ boxShadow: "3px 3px 15px #ddd" }}>
      <div>
        <div className={style.userGrid}>
          {employeeData?.map((employee: any) => (
            <EmployeeCart key={employee._id} employee={employee} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: 50, display: "flex", justifyContent: "end" }}>
        <Pagination
          defaultCurrent={1}
          total={data?.meta?.total}
          onChange={handlePagination}
          pageSizeOptions={["5", "10", "20"]}
          showSizeChanger
        />
      </div>
    </Card>
  );
};

export default AllUsers;
