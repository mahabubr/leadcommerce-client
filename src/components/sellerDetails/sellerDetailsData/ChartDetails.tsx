"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];


const labels = [
  "Dec",
  "Nov",
  "Oct",
  "Sep",
  "Aug",
  "Jul",
  "Jun",
  "May",
  "Apr",
  "Mar",
  "Feb",
  "Jan",
];

// const earningDataset = [
//   20.0, 30.0, 60.0, 90.0, 120.0, 50.0, 55.0, 65.0, 45.0, 35.0, 50.0, 70.0,
// ];
// const ordersDataset = [30, 40, 50, 80, 70, 90, 100, 80, 70, 80, 70];
// const refundDataset = [3, 4, 5, 8, 7, 9, 10, 8, 7, 8, 7, 0, 5];

const ChartDetails = ({ chartData }: { chartData: any }) => {
  console.log(chartData);

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Refunds",
        data: chartData?.getRefundsOrdersData,
        fill: false,
        borderColor: "#e74c3c",
        tension: 0.1,
        borderDash: [5, 5],
      },
      {
        type: "line" as const,
        label: "Earning",
        data: chartData?.getDeliveredOrdersData,
        fill: false,
        borderColor: "#3498db",
        tension: 0.1,
      },
      {
        type: "bar" as const,
        label: "Orders",
        data: chartData?.getPendingOrdersData,
        backgroundColor: "#2c3e50",
        barThickness: 35,
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
  return (
    <>
      <Chart height={100} type='bar' data={data} />
    </>
  );
};

export default ChartDetails;
