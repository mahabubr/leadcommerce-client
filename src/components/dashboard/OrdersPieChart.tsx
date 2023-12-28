import React from "react";
import style from "./static/dashboard.module.css";
import { PieChart } from "./PieChart";

const OrdersPieChart = ({ data }: { data: any }) => {
    console.log(data, 'order pichart')
  return (
    <div className={`${style.orders_pie} ${style.bg_white}`}>
      <h3 className={style.sales_head}>Order Status Stat</h3>
      <PieChart dataa={data && data} />
    </div>
  );
};

export default OrdersPieChart;
