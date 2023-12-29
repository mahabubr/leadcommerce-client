"use client";
import { Button, Card, Input } from "antd";
import React from "react";
import ChartDetails from "./ChartDetails";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SellerDetailsPageTable from "./SellerDetailsPageTable";
import style from '../static/sellerdetailscomponent.module.css'

const SellerDetailsData = ({ store }: any) => {
  return (
    <>
      <Card>
        <div className={style.revenueButton}
          >
          <div>
            <h4 style={{ color: "#2c3e50" }}>Revenue</h4>
          </div>
          <div style={{ display: "flex", gap: "1em" }}>
            <Button size='small' type='primary'>
              ALL
            </Button>
            <Button size='small' type='primary'>
              1M
            </Button>
            <Button size='small' type='primary'>
              6M
            </Button>
            <Button size='small' type='primary'>
              1Y
            </Button>
          </div>
        </div>
      </Card>
      <Card
        style={
          {
            // border: "1px solid blue",
            // display: "flex",
            // justifyContent: "space-between",
          }
        }>
        <div
          className={style.summayData}
          // style={{
          //   display: "flex",
          //   width: "100%",
          //   backgroundColor: " #ecf0f1",
          // }}
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
            }}>
            <h5>
              <span>{store?.total_orders}</span>
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
            }}>
            <h5>
              <span>$ {store?.earning[0]}</span>
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
            }}>
            <h5>
              <span>{store?.refund}</span>
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
            }}>
            <h5>
              <span>18.92</span>
            </h5>
            <p>Conversation Ratio</p>
          </div>
        </div>
        {/* charts */}
        <div style={{ marginTop: "1rem", padding: "1em" }}>
          <ChartDetails></ChartDetails>
        </div>
      </Card>

      {/* Add new and Search  */}
      <div
        style={{
          // border: "1px solid red",
          padding: "1em",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <Button type='primary' icon={<PlusOutlined />}>
          Add New
        </Button>
        <div>
          <Input addonAfter={<SearchOutlined />} placeholder='large size' />
        </div>
      </div>
      {/* table  */}
      <SellerDetailsPageTable></SellerDetailsPageTable>
    </>
  );
};

export default SellerDetailsData;
