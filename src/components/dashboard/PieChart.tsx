'use client'
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import style from "./static/dashboard.module.css";
import { calculatePercentage, debounce } from '@/Helper/CommonFunction';

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
  const pieChartRef:RefObject<any>=useRef<HTMLDivElement>(null);
  const [chartWidth,setChartWidth]=useState<number|null>(null);

    const handleResize=(e:any)=>{
      setChartWidth(pieChartRef?.current?.offsetWidth*70/100)
    }
    useEffect(()=>{
      // setChartWidth(pieChartRef.current.offsetWidth*90/100)
       window.addEventListener('resize', handleResize);
    },[])
  return <div ref={pieChartRef} className={style.pieChart}>
    <Doughnut className={style.anime} redraw={true} width={chartWidth || 350} height={calculatePercentage(chartWidth || 350,68)} options={{responsive:true,cutout:'70%'}} data={data} />;
  </div>
}
