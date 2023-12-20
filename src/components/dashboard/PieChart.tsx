'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import style from "./static/dashboard.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Order Completed', 'Order Pending', 'Order canceled', 'Order delayed'],
  datasets: [
    {
      label: 'total ',
      data: [12, 19, 3, 5],
      backgroundColor: [
        '#2c3e50',
        '#3498db',
        '#e74c3c',
        '#fff'
      ],
      borderColor: [
        '#2c3e50',
        '#3498db',
        '#e74c3c',
        '#fff'
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <div className={style.pieChart}>
    <Doughnut options={{responsive:true,cutout:'70%'}} data={data} />;
  </div>
}
