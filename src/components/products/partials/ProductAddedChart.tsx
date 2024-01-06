import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Card } from "antd";

Chart.register(...registerables);

const ProductsAddedChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            datasets: [
              {
                label: "Products Added",
                data: [20, 30, 15, 25, 40],
                backgroundColor: "#393f47",
                borderColor: "#393f47",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
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

export default ProductsAddedChart;
