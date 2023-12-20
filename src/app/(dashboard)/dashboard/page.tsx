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

const DashboardPage = () => {
  return (
    <div className={style.container}>
      <div className={style.summary}>
        <TopSingleCard
          total="500"
          text="Daily Signups"
          icon={<UserAddOutlined />}
        />
        <TopSingleCard
          link={paths.orders}
          total="40"
          text="Daily Orders"
          icon={<UserAddOutlined />}
        />
        <TopSingleCard
          total="$1000"
          text="Daily Revenue"
          icon={<DollarOutlined />}
        />
        <TopSingleCard
          link={paths.products}
          total="30"
          text="Daily added product"
          icon={<CloudUploadOutlined />}
        />
      </div>
      <div className={style.sales_report}>
        <SalesReport />
        <OrdersPieChart />
      </div>
      <div className={style.user_act}>
        <DailySignups />
        <UserActivity />
      </div>
      <div style={{ marginBottom: 20 }}>
        <MapChart />
      </div>
      <div className={style.top_items}>
        <TopProducts />
        <TopItems />
      </div>
      <div className={`${style.orders} ${style.bg_white}`}>
        <Orders />
      </div>
    </div>
  );
};

export default DashboardPage;
