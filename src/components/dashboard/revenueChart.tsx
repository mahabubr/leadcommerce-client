"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Radar } from 'react-chartjs-2';
import style from "./static/dashboard.module.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};


type IdataType={
  labels:string[],
  datasets:
    {
      fill?: boolean,
      label?:string ,
      data: number[],
      borderColor: string,
      backgroundColor?: string,
    }[]
};


export function RevenueChart(props:{data:IdataType}) {

    const {data}=props;
  return (
    <div className={style.revenue_chart}>
      <Line options={options} data={data} />
    </div>
  );
}
