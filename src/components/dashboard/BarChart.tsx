"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const dataset = [50, 70, 90, 150, 130, 170, 180, 140, 130, 150, 140];
// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: dataset,
//       backgroundColor: "#3498db",
//       barThickness: 10,
//     },
//   ],
// };

// console.log(data);

export function Barchart({ signUpData }: { signUpData: any }) {
  const dayLabel =
    signUpData &&
    signUpData?.ordersChart?.weeklySignUp?.map((item: any) => item.dayName);
  const signUpCount =
    signUpData &&
    signUpData?.ordersChart?.weeklySignUp?.map((item: any) => item.count);
  const data = {
    labels: dayLabel,
    datasets: [
      {
        label: "Dataset 1",
        data: signUpCount,
        backgroundColor: "#3498db",
        barThickness: 10,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar options={options} data={data} />;
}
