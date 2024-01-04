"use client";
import React from "react";
import { flattenToken } from "@ant-design/cssinjs/lib/util";
import { MailOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Progress } from "antd";
import { Input } from "antd";
import SellerInformation from "./SellerInformation";
import CustomerReviews from "./CustomerReviews";
import ProgressBar from "./ProgressBar";
import ContactSupport from "./ContactSupport";

const { TextArea } = Input;

const SellerProfile = ({ store }: any) => {
  return (
    <>
      <Card
        title="Profile Information"
        style={{ boxShadow: "3px 3px 15px #ddd" }}
      >
        <SellerInformation store={store}></SellerInformation>
        <Divider dashed />
        <CustomerReviews></CustomerReviews>
        {/* // progress bars  */}
        <ProgressBar></ProgressBar>
        <Divider dashed />
        <ContactSupport></ContactSupport>
      </Card>
    </>
  );
};

export default SellerProfile;
