import React from "react";
import style from "./static/dashboard.module.css";
import { Barchart } from "./BarChart";

const DailySignups = ({ data }: { data: any }) => {
  return (
    <div className={`${style.user_act} ${style.bg_white} ${style.daily_signups}`}>
      <h3 className={style.sales_head}>Daily Signups</h3>
      <div>
        <Barchart signUpData={data} />
      </div>
    </div>
  );
};

export default DailySignups;
