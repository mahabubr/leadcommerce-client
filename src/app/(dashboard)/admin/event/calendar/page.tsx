/* eslint-disable jsx-a11y/alt-text */
"use client";
import SplineChart from "@/components/dashboard/SplineChart";
import EventCalendar from "@/components/event/components/calendercomponent/EventCalendar";
import SmallCalender from "@/components/event/components/calendercomponent/SmallCalender";
import { LineChartOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import React from "react";
import style from "./static/calenderpage.module.css";

const CalenderPage = () => {
  return (
    <>
      <div
        className={style.event_cont}>
        <h3>Events</h3>
      </div>
      <div
        className={style.gridCont}>
        <div className={style.calender_box} style={{ flex: "1" }}>
          <EventCalendar></EventCalendar>
        </div>
        <div className={style.out_cont} style={{ width: "100%" }}>
          <Card style={{ width: "100%" }}>
            <h3>
              <LineChartOutlined/> TODAYS REVENUE
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
               flexDirection:'column',
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
              <div style={{ width: "100%" }}>
                <SplineChart/>
              </div>
            </div>
          </Card>
          {/* calender  */}
          <div className={style.sales_head} style={{ marginTop: "20px" }}>
            <div
              
              style={{
                backgroundColor: "white",
                padding: "1vw",
                marginBottom: "1vw",
                borderRadius: "8px",
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
              }}>
              <h3>Sale Calendar</h3>
            </div>
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
