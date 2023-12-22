"use client";
import React, { useState } from "react";
import style from "./static/profilesetting.module.css";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import ProfileUpdate from "@/components/Settings/ProfileUpdate";
import EmployeeModal from "./static/EmployeeModal";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "General",
    children: <ProfileUpdate />,
  },
  {
    key: "2",
    label: "Modaretor",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Admin Account",
    children: "Admin Account",
  },
];

const ProfileSetting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Profile Setting</h2>
          <EmployeeModal />
        </div>
        <div className={style.card}>
          <div className={style.cardBody}>
            <div
              className={(style.row, style.gx5)}
              style={{
                position: "relative",

                display: "flex",
              }}
            >
              <div
                style={{
                  padding: "2rem",

                  width: "100%",
                }}
              >
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={"left"}
                  style={{
                    minHeight: "60vh",
                  }}
                  tabBarGutter={25}
                  type="line"
                  items={items}
                  onChange={onChange}
                  tabBarStyle={{
                    width: "10rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSetting;
