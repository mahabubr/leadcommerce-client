"use client";
import React from "react";
import style from "./static/profilesetting.module.css";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import ProfileUpdate from "@/components/Settings/ProfileUpdate";

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
            <div
              className={(style.row, style.gx5)}
              style={{
                // border: "1px solid red",
                position: "relative",
                // height: "70vh",
                display: "flex",
              }}>
              <div
                style={{
                  padding: "2rem",
                  // border: "1px solid green",
                  width: "100%",
                }}>
                <Tabs
            
                  defaultActiveKey='1'
                  tabPosition={"left"}
                  style={{
                    height: "100vh",
                  }}
                  tabBarGutter={25}
                  type='line'
                  items={items}
                  onChange={onChange}
                  tabBarStyle={{
                    width: "10rem",
                  }}
                />
              </div>
              {/* <div
                style={{
                  border: "1px solid yellow",
                  width: "300px",
                }}>
                <SettingSideBar />
              </div>
              <div
                style={{
                  border: "1px solid green",
                  flex: "8",
                }}>
                <SettingContent></SettingContent>
              </div> */}
              {/* <aside className={(style.colLg3, style.borderEnd)}>
                <nav
                  className={
                    (style.nav, style.navPills, style.flexLgColumn, style.mB4)
                  }>
                  <a className='nav-link active' aria-current='page' href='#'>
                    General
                  </a>
                  <a className='nav-link' href='#'>
                    Moderators
                  </a>
                  <a className='nav-link' href='#'>
                    Admin account
                  </a>
                  <a className='nav-link' href='#'>
                    SEO settings
                  </a>
                  <a className='nav-link' href='#'>
                    Mail settings
                  </a>
                  <a className='nav-link' href='#'>
                    Newsletter
                  </a>
                </nav>
              </aside> */}
              {/* aside end    */}
              {/* <div className={style.colLg9}>
                <section className={style.pxl4}>
                  helloworld
                </section>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileSetting;
