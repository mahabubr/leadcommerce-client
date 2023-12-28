"use client"


import { Line } from "react-chartjs-2";
import React,{useRef,useEffect, useState, RefObject} from 'react';
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
// import { Line, Radar } from 'react-chartjs-2';
import style from "./static/dashboard.module.css"
import { calculatePercentage } from "@/Helper/CommonFunction";
import { debounce } from "chart.js/helpers";

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
  // responsive: true,
  maintainAspectRatio: false,
  // aspectRatio:1.5,
  // plugins: {
  //   legend: {
  //     position: 'top' as const,
  //   }
  // },
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
  const chartRef:RefObject<any>=useRef<HTMLDivElement>(null);
  const [chartWidth,setChartWidth]=useState<number|null>(null);
  const debouncedResizeHandler = debounce((val)=>setChartWidth(val), 300);

    const {data}=props;

    const handleResize=(e:any)=>{
      setChartWidth(chartRef?.current?.offsetWidth*85/100)
    }
    useEffect(()=>{
      // setChartWidth(chartRef.current.offsetWidth*90/100)
       window.addEventListener('resize', handleResize);
    },[])
  return (
    <div ref={chartRef} className={style.revenue_chart}>
      <Line className={style.anime} redraw={true} width={chartWidth || 350} height={calculatePercentage(chartWidth || 350,68)} options={options} data={data} />
    </div>
  );
}
