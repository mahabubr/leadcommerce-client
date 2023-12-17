import React from 'react';
import style from "./static/dashboard.module.css";
import { PieChart } from './PieChart';

const OrdersPieChart = () => {
    return (
        <div className={style.orders_pie}>
            <PieChart/>
        </div>
    );
};

export default OrdersPieChart;