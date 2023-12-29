"use client";
import React from "react";
import {
  CloudUploadOutlined,
  DollarOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { paths } from "@/paths/paths";
import style from "./static/dashboard.module.css";
import TopSingleCard from "@/components/dashboard/topSingleCard";
import SalesReport from "@/components/dashboard/SalesReport";
import OrdersPieChart from "@/components/dashboard/OrdersPieChart";
import UserActivity from "@/components/dashboard/userActivity";
import DailySignups from "@/components/dashboard/DailySignups";
import TopProducts from "@/components/dashboard/TopProducts";
import TopItems from "@/components/dashboard/TopItems";
import Orders from "@/components/dashboard/Orders";
import MapChart from "@/components/dashboard/MapChart";
import { useGetAllDashboardDataQuery } from "@/redux/dashboard/dashboard";

const DashboardPage = () => {
  const { data }: { data?: any } = useGetAllDashboardDataQuery({});
  const dashboardData = data && data?.data;
  // console.log(dashboardData?.userDailySingUp);

  return (
    <div className={style.container}>
      <div className={style.summary}>
        <TopSingleCard
          total={dashboardData && dashboardData?.userDailySingUp}
          text='Daily Signups'
          icon={<UserAddOutlined />}
        />
        <TopSingleCard
          link={paths.orders}
          total={dashboardData && dashboardData?.dailyOrders}
          text='Daily Orders'
          icon={<UserAddOutlined />}
        />
        <TopSingleCard
          total={dashboardData && dashboardData?.dailyRevenue}
          text='Daily Revenue'
          icon={<DollarOutlined />}
        />
        <TopSingleCard
          link={paths.products}
          total={dashboardData && dashboardData?.dailyProducts}
          text='Daily added product'
          icon={<CloudUploadOutlined />}
        />
      </div>
      <div className={style.sales_report}>
        <SalesReport data={dashboardData} />
        <OrdersPieChart data={dashboardData} />
      </div>
      <div className={style.user_act}>
        <DailySignups data={dashboardData} />
        <UserActivity />
      </div>
      <div style={{ marginBottom: 20 }}>
        <MapChart />
      </div>
      <div className={style.top_items}>
        <TopProducts data={dashboardData} />
        <TopItems data={dashboardData} />
      </div>
      <div className={`${style.orders} ${style.bg_white}`}>
        <Orders data={dashboardData} />
      </div>
    </div>
  );
};

export default DashboardPage;
