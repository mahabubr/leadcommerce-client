"use client";
import UserCart from "@/components/users/UserCart";
import React from "react";
import style from "./static/userpage.module.css";
import { useGetAllAdminQuery } from "@/redux/admin/adminApi";

const AllUsers = () => {
  const { data }: { data?: any } = useGetAllAdminQuery({});
  const adminData = data && data?.data;
  //   console.log(adminData);
  //   console.log(data);
  return (
    <div style={{ border: "1px solid red", padding: "1vw 2vw" }}>
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
          //   border: "1px solid green",
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          marginTop: "15px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <div className={style.userGrid}>
          {adminData?.length > 0
            ? adminData?.map((admin: any) => (
                <UserCart key={admin._id} admin={admin} />
              ))
            : "Not Store Found"}
          {/* <UserCart />
          <UserCart />
          <UserCart />
          <UserCart />
          <UserCart /> */}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
