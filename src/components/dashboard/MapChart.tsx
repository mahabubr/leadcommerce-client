"use client";

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 500],
  ["Brazil", 400],
  ["Canada", 300],
  ["France", 600],
  ["RU", 800],
  ["Bangladesh", 700],
  ["AU", 1000],
];

const MapChart = () => {
  const handleSelection = ({ chartWrapper }: any) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (selection.length === 0) {
      console.log("No region selected.");
      return;
    }
    const selectedRegion = data[selection[0].row + 1];
    console.log("Selected Region: ", selectedRegion);
  };

  return (
    <div style={{ borderRadius: 10, overflow: "hidden" }}>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: handleSelection,
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          colorAxis: { colors: ["#e0e0e0", "#2c3e50"] },
          tooltip: { textStyle: { color: "#2c3e50" } },
        }}
      />
    </div>
  );
};

export default MapChart;
