/* eslint-disable jsx-a11y/alt-text */
"use client";
import SplineChart from "@/components/dashboard/SplineChart";
import EventCalendar from "@/components/event/components/calendercomponent/EventCalendar";
import SmallCalender from "@/components/event/components/calendercomponent/SmallCalender";
import { LineChartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import React from "react";

const CalenderPage = () => {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <h4 style={{ fontSize: "30px" }}>Events</h4>
      </div>
      <div
        style={{
          padding: "10px",
          display: "flex",
          gap: "10px",
        }}>
        <div style={{ flex: "1" }}>
          <EventCalendar></EventCalendar>
        </div>
        <div style={{ width: "25%" }}>
          <Card style={{ width: "100%" }}>
            <h3>
              <LineChartOutlined /> TODAYS REVENUE
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // border: "1px solid red",
              }}>
              <h1
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                $2,189
              </h1>
              <div style={{ width: "60%" }}>
                <SplineChart />
              </div>
            </div>
          </Card>
          {/* calender  */}
          <div style={{ marginTop: "20px" }}>
            <SmallCalender></SmallCalender>
          </div>
          <div
            style={{
              // border: "1px solid red",
              height: "400px",
              overflow: "hidden",
              marginTop: "20px",
              borderRadius: "8px",
            }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src='https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderPage;
