"use client";
import React from "react";
import { flattenToken } from "@ant-design/cssinjs/lib/util";
import { MailOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Progress } from "antd";
import { Input } from "antd";
import SellerInformation from "./SellerInformation";
import CustomerReviews from "./CustomerReviews";
import ProgressBar from "./ProgressBar";
import ContactSupport from "./ContactSupport";

const { TextArea } = Input;

const SellerProfile = () => {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <SellerInformation></SellerInformation>
        <Divider dashed />
        <CustomerReviews></CustomerReviews>
        {/* // progress bars  */}
        <ProgressBar></ProgressBar>
        <Divider dashed />
        <ContactSupport></ContactSupport>
      </div>
    </>
  );
};

export default SellerProfile;