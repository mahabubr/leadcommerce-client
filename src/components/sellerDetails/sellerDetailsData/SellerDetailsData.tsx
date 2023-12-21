"use client";
import { Button, Input } from "antd";
import React from "react";
import ChartDetails from "./ChartDetails";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SellerDetailsPageTable from "./SellerDetailsPageTable";

const SellerDetailsData = () => {
  return (
    <>
      <div
        style={{
          //   border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
        }}
      >
        <div>
          <h4 style={{ color: "#2c3e50" }}>Revenue</h4>
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <Button size="small" type="primary">
            ALL
          </Button>
          <Button size="small" type="primary">
            1M
          </Button>
          <Button size="small" type="primary">
            6M
          </Button>
          <Button size="small" type="primary">
            1Y
          </Button>
        </div>
      </div>
      <div
        style={
          {
            //   border: "1px solid blue",
            //   display: "flex",
            //   justifyContent: "space-between",
          }
        }
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: " #ecf0f1",
          }}
        >
          <div
            style={{
              border: "1px dashed  #999b9c",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>
              <span>7585</span>
            </h5>
            <p>Orders</p>
          </div>
          <div
            style={{
              border: "1px dashed  #999b9c",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <h5>
              <span>$22.89k</span>
            </h5>
            <p>Earning</p>
          </div>
          <div
            style={{
              border: "1px dashed  #999b9c",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <h5>
              <span>367</span>
            </h5>
            <p>Refunds</p>
          </div>
          <div
            style={{
              border: "1px dashed  #999b9c",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <h5>
              <span>18.92</span>
            </h5>
            <p>Conversation Ratio</p>
          </div>
        </div>
      </div>
      {/* charts */}
      <div style={{ marginTop: "1rem", padding: "1em" }}>
        <ChartDetails></ChartDetails>
      </div>
      {/* Add new and Search  */}
      <div
        style={{
          // border: "1px solid red",
          padding: "1em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button type="primary" icon={<PlusOutlined />}>
          Add New
        </Button>
        <div>
          <Input addonAfter={<SearchOutlined />} placeholder="large size" />
        </div>
      </div>
      {/* table  */}
      <SellerDetailsPageTable></SellerDetailsPageTable>
    </>
  );
};

export default SellerDetailsData;
