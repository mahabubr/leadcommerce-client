"use client";
import React from "react";
import style from "../static/sellerdetailscomponent.module.css";
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

const ChartDetails = ({ chartData }: { chartData: any }) => {

    const data = {
        labels,
        datasets: [
            {
                type: "line" as const,
                label: "Refunds",
                data: chartData?.data?.getRefundsOrdersData,
                fill: false,
                borderColor: "#e74c3c",
                tension: 0.1,
                borderDash: [5, 5],
            },
            {
                type: "line" as const,
                label: "Earning",
                data: chartData?.data?.getDeliveredOrdersData,
                fill: false,
                borderColor: "#3498db",
                tension: 0.1,
            },
            {
                type: "bar" as const,
                label: "Orders",
                data: chartData?.data?.getPendingOrdersData,
                backgroundColor: "#2c3e50",
                barThickness: 20,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
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
            <div className={style.canvasContainer}>
                <Chart height={100} type='bar' data={data} />
            </div>
        </>
    );
};

export default ChartDetails;
