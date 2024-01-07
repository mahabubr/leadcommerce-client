"use client";
import React, { useEffect } from "react";
import style from "./static/profilesetting.module.css";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { useGetAEmployeQuery } from "@/redux/employees/employeesApi";
import ProfileUpdate from "@/components/DeliverySettings/ProfileUpdate";


const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Profile Update",
    children: <ProfileUpdate />,
  },
  // {
  //   key: "2",
  //   label: "Modaretor",
  //   children: "Content of Tab Pane 2",
  // },
  // {
  //   key: "3",
  //   label: "Admin Account",
  //   children: "Admin Account",
  // },
];

const ProfileSetting = () => {
  const { data } = useGetAEmployeQuery({});

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Profile Setting</h2>
        </div>
        <div className={style.card}>
          <div className={style.cardBody}>
            <div>
              <div
                style={{
                  padding: "2rem",
                }}
              >
                <Tabs
                  defaultActiveKey="1"
                  tabPosition={"left"}
                  style={{
                    minHeight: "60vh",
                  }}
                  className={style.tabResponsive}
                  tabBarGutter={25}
                  type="line"
                  items={items}
                  onChange={onChange}
                  tabBarStyle={{
                    width: "20%",
                  }}
                />
                <Tabs
                  className={style.tabMobile}
                  defaultActiveKey="1"
                  items={items}
                  style={{
                    minHeight: "60vh",
                  }}
                  onChange={onChange}
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
