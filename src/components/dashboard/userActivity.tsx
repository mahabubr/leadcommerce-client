import React from 'react';
import style from "./static/dashboard.module.css"
import { RevenueChart } from './revenueChart';

const labels3 = ['1 Nov','7 Nov','14 Nov','21 Nov','28 Nov','5 Dec','12 Dec','19 Dec','26 Dec'];
const datasets3={
  labels:labels3,
  datasets: [
    {
    //   fill: true,
      label: 'Active User',
      data: [100,120,130,120,130,140,130,140,150,140],
      borderColor: 'rgb(53, 162, 235)',
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
    //   fill: true,
      label: 'Unactive User',
      data: [100,110,100,110,120,110,120,130,130,135],
      borderColor: 'rgb(231,76,60,0.6)',
      borderDash: [0.1,0.1],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ],
};

const UserActivity = () => {
    return (
        <div className={`${style.user_act} ${style.bg_white}`}>
            <h3 className={style.sales_head}>User Activity</h3>
            <div className={style.user_act_chart}>
              <RevenueChart data={datasets3}/>
            </div>
        </div>
    );
};

export default UserActivity;