import React from "react";
import Tab from "../ui/Tab";
import { RevenueChart } from "./revenueChart";
import style from "./static/dashboard.module.css";
import { clearScreenDown } from "readline";
import { dateFormaterForWeeklyChart } from "@/Helper/dateFormater";

// const labels3 = [
//   "1 Nov",
//   "7 Nov",
//   "14 Nov",
//   "21 Nov",
//   "28 Nov",
//   "5 Dec",
//   "12 Dec",
//   "19 Dec",
//   "26 Dec",
// ];

// const labels1 = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// // const datasets1 = {
// //   labels: labels1,
// //   datasets: [
// //     {
// //       fill: true,
// //       label: "Monthly revenue stat",
// //       data: [42, 78, 68, 62, 88, 12, 23, 45, 66, 45, 47, 99],
// //       borderColor: "rgb(53, 162, 235)",
// //       backgroundColor: "rgba(53, 162, 235, 0.5)",
// //       cubicInterpolationMode: "monotone",
// //     },
// //   ],
// // };
// const labels2 = [
//   "2013",
//   "2014",
//   "2015",
//   "2016",
//   "2018",
//   "2018",
//   "2019",
//   "2020",
//   "2021",
//   "2022",
//   "2023",
// ];
// const datasets2 = {
//   labels: labels2,
//   datasets: [
//     {
//       fill: true,
//       label: "Yearly revenue stat",
//       data: [420, 780, 680, 620, 880, 120, 230, 450, 660, 450, 470, 990],
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//       cubicInterpolationMode: "monotone",
//     },
//   ],
// };
const SalesReport = ({ data }: { data: any }) => {
  //  * --[monthly data starts]--
  const monthlyLabel =
    data && data?.ordersChart?.monthlyOrders?.map((item: any) => item.month);
  const monthlyData =
    data && data?.ordersChart?.monthlyOrders?.map((item: any) => item.count);
  const datasets1 = {
    labels: monthlyLabel,
    datasets: [
      {
        fill: true,
        label: "Monthly revenue stat",
        data: monthlyData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };
  // * --[monthly data end's]--
  // * --[weekly data start's]--
  const weekLabel =
    data && data?.ordersChart?.weeklyOrders?.map((item: any) => item.date);
  const formattedDates = dateFormaterForWeeklyChart(weekLabel);
  const weeklyData =
    data && data?.ordersChart?.weeklyOrders?.map((item: any) => item.count);
  const datasets3 = {
    labels: formattedDates,
    datasets: [
      {
        fill: true,
        label: "weekly revenue stat",
        data: weeklyData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };
  // * --[weekly data end's]--
  // * --[year data start's]--
  const yearlyLabel =
    data && data?.ordersChart?.yearlyOrders?.map((item: any) => item.year);
  const yearlyData =
    data && data?.ordersChart?.yearlyOrders?.map((item: any) => item.count);
  const datasets2 = {
    labels: yearlyLabel,
    datasets: [
      {
        fill: true,
        label: "Yearly revenue stat",
        data: yearlyData,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
      },
    ],
  };
  // * --[year data end's]--
  return (
    <div className={`${style.sales_report} ${style.bg_white}`}>
      <div className={style.sales_head}>
        <h3>Order Revenue Report</h3>
      </div>
      <Tab
        childrens={[
          {
            body: <RevenueChart data={datasets1} key='Monthly' />,
            label: "Monthly",
          },
          {
            body: <RevenueChart data={datasets3} key='Weekly' />,
            label: "Weekly",
          },
          {
            body: <RevenueChart data={datasets2} key='Yearly' />,
            label: "Yearly",
          },
        ]}
        labels={["Monthly", "Weekly", "Yearly"]}
      />
    </div>
  );
};

export default SalesReport;
