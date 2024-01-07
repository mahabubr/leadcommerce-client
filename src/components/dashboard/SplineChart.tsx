import { Chart } from "react-google-charts";

const SplineChart = () => {
  const data = [
    ["Year", "Sales"],
    ["2013", 1000],
    ["2014", 5877],
    ["2015", 660],
    ["2016", 55],
    ["2016", 12445],
    ["2016", 454],
    ["2016", 4544],
  ];

  const options = {
    responsive:true,
    maintainAspectRatio:false,
    vAxis: {
      textPosition: "none",
      gridlines: {
        color: "transparent",
      },
    },

    hAxis: {
      textPosition: "none",
      gridlines: {
        color: "transparent",
      },
    },
    curveType: "function",
    colors: ["#2c3e50"],
  };

  return (
    <div>
      <Chart
        chartType='AreaChart'
        width='100%'
        height='150px'
        data={data}
        options={options}
      />
    </div>
  );
};

export default SplineChart;
