"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import style from "./static/dashboard.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart({ OrderData }: { OrderData: any }) {
  const {
    delivered,
    cancel,
    paused,
    pending,
  }: { delivered: number; cancel: number; paused: number; pending: number } =
    OrderData ? OrderData?.ordersChart?.ordersStats : {};
  const data = {
    labels: [
      "Order Completed",
      "Order Pending",
      "Order canceled",
      "Order delayed",
    ],
    datasets: [
      {
        label: "total ",
        data: [delivered, pending, cancel, paused],
        backgroundColor: ["#2c3e50", "#3498db", "#e74c3c", "#fff"],
        borderColor: ["#2c3e50", "#3498db", "#e74c3c", "#fff"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={style.pieChart}>
      <Doughnut options={{ responsive: true, cutout: "70%" }} data={data} />;
    </div>
  );
}
