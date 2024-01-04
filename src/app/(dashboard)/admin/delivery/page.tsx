"use client";
import UserCart from "@/components/users/AdminCart";
import React, { useState } from "react";
import style from "./static/userpage.module.css";
import { useGetAllAdminQuery } from "@/redux/admin/adminApi";
import { Card, Pagination, Spin } from "antd";

import DeliveryCart from "@/components/users/DeliveryCart";
import { useGetAllDeliverysQuery } from "@/redux/delivery/deliveryApi";

const AllDelivery = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllDeliverysQuery({
    ...query,
  });
  const deliveryData = data && data?.data;

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };
  return (
    <Card title="All Delivery" style={{ boxShadow: "3px 3px 15px #ddd" }}>
      <div>
        <div className={style.userGrid}>
          {deliveryData?.map((deliveryData: any) => (
            <DeliveryCart key={deliveryData._id} delivery={deliveryData} />
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

export default AllDelivery;
