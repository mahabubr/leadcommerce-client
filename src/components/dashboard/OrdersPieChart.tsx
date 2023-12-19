import React from 'react';
import style from "./static/dashboard.module.css";
import { PieChart } from './PieChart';

const OrdersPieChart = () => {
    return (
        <div className={`${style.orders_pie} ${style.bg_white}`}>
            <h3 className={style.sales_head}>Order Status Stat</h3>
            <PieChart/>
        </div>
    );
};

export default OrdersPieChart;