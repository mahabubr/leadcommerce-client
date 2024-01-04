"use client";
import { Button, Card, Input } from "antd";
import React from "react";
import ChartDetails from "./ChartDetails";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import SellerDetailsPageTable from "./SellerDetailsPageTable";
import style from "../static/sellerdetailscomponent.module.css";

const SellerDetailsData = ({ store, id }: any) => {
  return (
    <>
      <Card
        title="Store Information"
        style={{ boxShadow: "3px 3px 15px #ddd" }}
      >
        <div className={style.summayData}>
          <div
            style={{
              border: "1px dashed  #ddd",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <h5>
              <span>{store?.data?.data?.total_orders?.total || "N/A"}</span>
            </h5>
            <p>Orders</p>
          </div>
          <div
            style={{
              border: "1px dashed  #ddd",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <h5>
              <span>$ {store?.data?.data?.earning?.totalAmount || " N/A"}</span>
            </h5>
            <p>Earning</p>
          </div>
          <div
            style={{
              border: "1px dashed  #ddd",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <h5>
              <span>{store?.data?.data?.refund?.total || "N/A"}</span>
            </h5>
            <p>Refunds</p>
          </div>
          <div
            style={{
              border: "1px dashed  #ddd",
              padding: "1em",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <h5>
              <span>
                {100 -
                  (Number(store?.data?.data?.refund?.total) * 100) /
                    Number(store?.data?.data?.total_orders?.total)}
                %
              </span>
            </h5>
            <p>Conversation Ratio</p>
          </div>
        </div>
        {/* charts */}
        <div style={{ marginTop: "1rem", padding: "1em" }}>
          <ChartDetails chartData={store?.data} />
        </div>
      </Card>

      {/* table  */}
      <SellerDetailsPageTable id={id}></SellerDetailsPageTable>
    </>
  );
};

export default SellerDetailsData;
