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

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };


type IdataType={
  labels:string[],
  datasets:
    {
      fill: boolean,
      label?:string ,
      data: number[],
      borderColor: string,
      backgroundColor: string,
    }[]
};


export function RevenueChart(props:{data:IdataType}) {

    const {data}=props;
  return <Line options={{}} data={data} />;
}
