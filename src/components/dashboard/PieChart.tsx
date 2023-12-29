"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import style from "./static/dashboard.module.css";
import { calculatePercentage, debounce } from '@/Helper/CommonFunction';

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
        backgroundColor: ["#475A6F", "rgba(71,90,111,.4)", "#ED9090", "#fff"],
        borderColor: ["#475A6F", "rgba(71,90,111,.4)", "#ED9090", "#fff"],
        borderWidth: 1,
      },
    ],
  };
  const pieChartRef:RefObject<any>=useRef<HTMLDivElement>(null);
  const [chartWidth,setChartWidth]=useState<number|null>(null);

    const handleResize=(e:any)=>{
      setChartWidth(pieChartRef?.current?.offsetWidth*70/100)
    }
    useEffect(()=>{
      // setChartWidth(pieChartRef.current.offsetWidth*90/100)
       window.addEventListener('resize', handleResize);
    },[])
  return (
    <div ref={pieChartRef} className={style.pieChart}>
      <Doughnut className={style.anime} redraw={true} width={chartWidth || 350} height={chartWidth || 350} options={{ responsive: true, cutout: "75%" }} data={data} />;
    </div>
  );
}
