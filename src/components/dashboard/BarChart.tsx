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
