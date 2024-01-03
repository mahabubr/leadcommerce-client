"use client";
import UserCart from "@/components/users/AdminCart";
import React, { useState } from "react";
import style from "../static/userpage.module.css";
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
    <div
      style={{
        // border: "1px solid red",
        padding: "0",
      }}>
      <div
        className="box-shadow-common"
        style={{
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>All Admins</h3>
      </div>
      <div
        className={`${style.admins_card_container} box-shadow-common`}
        style={{
          // boxShadow:
            // "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <div className={style.userGrid}>
          {adminData?.length > 0 ? (
            adminData?.map((admin: any) => (
              <UserCart key={admin._id} admin={admin} />
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
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            width: "100%",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}>
          <Pagination
            defaultCurrent={1}
            total={adminData?.meta?.total}
            onChange={handlePagination}
            pageSizeOptions={["5", "10", "20"]}
            showSizeChanger
          />
        </Card>
      </div>
    </div>
  );
};

export default AllUsers;
