'use client';
import React,{RefObject,useRef,useState,useEffect} from 'react';
import style from "./static/dashboard.module.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { calculatePercentage } from '@/Helper/CommonFunction';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['1 Nov','7 Nov','14 Nov','21 Nov','28 Nov','5 Dec','12 Dec','19 Dec','26 Dec'];
const dataset=[50,70,90,150,130,170,180,140,130,150,140];
export const data = {
  labels,
  datasets:[
    {
      label: 'Dataset 1',
      data: dataset,
      backgroundColor: '#3498db',
      barThickness: 10,
    }
]
};

console.log(data);
const options = {
        legend:{
            display:false
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      },
    };


export function Barchart() {
  const barChartRef:RefObject<any>=useRef<HTMLDivElement>(null);
  const [chartWidth,setChartWidth]=useState<number|null>(null);


    const handleResize=(e:any)=>{
      setChartWidth(barChartRef?.current?.offsetWidth*85/100)
      console.log(barChartRef?.current?.offsetWidth,window.innerWidth);
    }
    useEffect(()=>{
      // setChartWidth(barChartRef.current.offsetWidth*90/100)
       window.addEventListener('resize', handleResize);
    },[])
    
  return <div className={style.barchart_cont} ref={barChartRef}>
      <Bar className={style.anime} redraw={true} width={chartWidth || 350} height={calculatePercentage(chartWidth || 350,68)} options={options} data={data} />
  </div>;
}
