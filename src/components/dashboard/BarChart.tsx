'use client';
import React from 'react';
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

export function Barchart() {
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
  return <Bar options={options} data={data} />;
}
