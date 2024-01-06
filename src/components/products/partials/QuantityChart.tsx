import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { Card } from "antd";

Chart.register(...registerables);

const MonthlyQuantityChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: ["Weekly", "Monthly", "Yearly"],
            datasets: [
              {
                label: "Monthly Quantity",
                data: [30, 20, 40],
                backgroundColor: ["#393f47", "#27292c", "#121213"],
                borderColor: ["#393f47", "#27292c", "#121213"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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

export default MonthlyQuantityChart;
