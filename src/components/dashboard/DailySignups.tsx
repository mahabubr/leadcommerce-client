import React from 'react';
import style from "./static/dashboard.module.css";
import { Barchart } from './BarChart';

const DailySignups = () => {
    return (
        <div className={style.user_act}>
            <h3 className={style.sales_head}>Daily Signups</h3>
            <div>
                <Barchart/>
            </div>
        </div>
    );
};

export default DailySignups;