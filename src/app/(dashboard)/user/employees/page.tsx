"use client";
import React, { useState } from "react";
import style from "../static/userpage.module.css";
import { Card, Pagination, Spin } from "antd";
import { useGetAllEmployesQuery } from "@/redux/employees/employeesApi";
import EmployeeCart from "@/components/users/EmployeeCart";

const AllEmployees = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllEmployesQuery({
    ...query,
  });
  const employeeData = data && data?.data;
  console.log(employeeData);

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };
  return (
    <div
      style={{
        // border: "1px solid red",
        padding: "",
      }}>
      <div
        className="box-shadow-common"
        style={{
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          // boxShadow:
            // "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>All Employees</h3>
      </div>
      <div
        className={`${style.admins_card_container} box-shadow-common`}>
        <div className={style.userGrid}>
          {employeeData?.length > 0 ? (
            employeeData?.map((employee: any) => (
              <EmployeeCart key={employee._id} employee={employee} />
            ))
          ) : (
            <div
              style={{
                height: "80vh",
                width: "76vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Spin size='large' />
            </div>
          )}
        </div>
      </div>
      <div>
        <Card
          style={{
            marginTop: 15,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}>
          <Pagination
            defaultCurrent={1}
            total={employeeData?.meta?.total}
            onChange={handlePagination}
            pageSizeOptions={["5", "10", "20"]}
            showSizeChanger
          />
        </Card>
      </div>
    </div>
  );
};

export default AllEmployees;
