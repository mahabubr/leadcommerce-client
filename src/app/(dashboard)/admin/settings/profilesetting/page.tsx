"use client";
import React, { useEffect } from "react";
import style from "./static/profilesetting.module.css";
import { Card, Tabs } from "antd";
import type { TabsProps } from "antd";

import { useGetAEmployeQuery } from "@/redux/employees/employeesApi";
import ProfileUpdate from "@/components/AdminSettings/ProfileUpdate";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Profile",
    children: <ProfileUpdate />,
  },
];

const ProfileSetting = () => {
  const { data } = useGetAEmployeQuery({});

  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <Card title="Admin Profile" style={{ boxShadow: "3px 3px 15px #ddd" }}>
      <section>
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
    </Card>
  );
};

export default ProfileSetting;
