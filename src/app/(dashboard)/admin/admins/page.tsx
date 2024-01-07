/* eslint-disable @next/next/no-img-element */
"use client";
import UserCart from "@/components/users/AdminCart";
import React, { useState } from "react";
import style from "./static/userpage.module.css";
import { useGetAllAdminQuery } from "@/redux/admin/adminApi";
import { Avatar, Card, Pagination, Spin, Modal } from "antd";
import {
  AppstoreAddOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserCard from "@/components/users/UserCard";

const AllUsers = () => {
  const query: any = {};
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  query["page"] = pagPage;
  query["limit"] = pagSize;
  const { data }: { data?: any } = useGetAllAdminQuery({
    ...query,
  });
  const userData = data && data?.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };

  return (
    <Card title='All Admins' style={{ boxShadow: "3px 3px 15px #ddd" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
        {userData?.map((user: any) => (
          <UserCard key={user._id} user={user} />
        ))}
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
