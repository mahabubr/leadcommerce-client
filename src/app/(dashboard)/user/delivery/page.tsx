"use client";
import UserCart from "@/components/users/AdminCart";
import React, { useState } from "react";
import style from "../static/userpage.module.css";
import { useGetAllAdminQuery } from "@/redux/admin/adminApi";
import { Card, Pagination, Spin } from "antd";
import { useGetAllDeliveryQuery } from "@/redux/delivery/deliveryApi";
import DeliveryCart from "@/components/users/DeliveryCart";

const AllDelivery = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllDeliveryQuery({
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
        padding: "1vw 2vw",
      }}>
      <div
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
        style={{
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          marginTop: "15px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <div className={style.userGrid}>
          {adminData?.length > 0 ? (
            adminData?.map((delivery: any) => (
              <DeliveryCart key={delivery._id} delivery={delivery} />
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

export default AllDelivery;
