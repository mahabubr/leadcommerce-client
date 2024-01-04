"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
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
import style from "./static/dashboard.module.css";
import { calculatePercentage } from "@/Helper/CommonFunction";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getSignUpData = (signUpData: any) => {
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
        backgroundColor: "#393f47",
        barThickness: 10,
      },
    ],
  };

  return data;
};
const options = {
  legend: {
    display: false,
  },
  // maintainAspectRatio: false,
  // // scales: {
  // //   x: {
  // //     stacked: true,
  // //   },
  // //   y: {
  // //     stacked: true,
  // //   },
  // // },
  // // responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export function Barchart({ signUpData }: { signUpData: any }) {
  const chartRef: RefObject<any> = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState<number | null>(null);

  const handleResize = (e: any) => {
    setChartWidth(((window.innerWidth - 300) * 30) / 100);
    console.log(
      "barchart",
      window.innerWidth,
      (chartRef?.current?.offsetWidth * 85) / 100
    );
  };
  useEffect(() => {
    // setChartWidth(chartRef.current.offsetWidth*90/100)
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={chartRef}>
      <Bar
        className={style.anime + " " + style.barChart}
        redraw={true}
        width={chartWidth || 350}
        height={calculatePercentage(chartWidth || 350, 70)}
        options={options}
        data={getSignUpData(signUpData)}
      />
      ;
    </div>
  );
}
