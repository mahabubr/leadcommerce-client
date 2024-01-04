"use client";
import UserCart from "@/components/users/AdminCart";
import React, { useState } from "react";
import style from "./static/userpage.module.css";
import { useGetAllAdminQuery } from "@/redux/admin/adminApi";
import { Card, Pagination, Spin } from "antd";

const AllUsers = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllAdminQuery({
    ...query,
  });
  const adminData = data && data?.data;

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };

  return (
    <Card title="All Admins" style={{ boxShadow: "3px 3px 15px #ddd" }}>
      <div>
        <div className={style.userGrid}>
          {adminData?.map((admin: any) => (
            <UserCart key={admin._id} admin={admin} />
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
