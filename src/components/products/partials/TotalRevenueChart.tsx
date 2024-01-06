import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Card } from "antd";

Chart.register(...registerables);

const RevenueChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: "Total Revenue",
                data: [200, 100, 300, 500, 100, 50, 800],
                fill: false,
                borderColor: "#393f47",
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: false,
                ticks: {
                  callback: (value: any) => `$${value.toFixed(2)}`,
                },
              },
            },
          },
        });

        return () => {
          myChart.destroy();
        };
      }
    }
  }, []);

  return (
    <Card>
      <canvas ref={chartRef} />
    </Card>
  );
};

export default RevenueChart;
