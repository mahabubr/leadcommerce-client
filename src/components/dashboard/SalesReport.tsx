import React from "react";
import Tab from "../ui/Tab";
import { RevenueChart } from "./revenueChart";
import style from "./static/dashboard.module.css";
import { clearScreenDown } from "readline";
import { dateFormaterForWeeklyChart } from "@/Helper/dateFormater";

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
        borderColor: "rgb(71,90,111)",
        backgroundColor: "rgba(71,90,111,0.5)",
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
        borderColor: "rgb(71,90,111)",
        backgroundColor: "rgba(71,90,111,0.5)",
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
        borderColor: "rgb(71,90,111)",
        backgroundColor: "rgba(71,90,111,0.5)",
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
            body: <RevenueChart data={datasets1} key="Monthly" />,
            label: "Monthly",
          },
          {
            body: <RevenueChart data={datasets3} key="Weekly" />,
            label: "Weekly",
          },
          {
            body: <RevenueChart data={datasets2} key="Yearly" />,
            label: "Yearly",
          },
        ]}
        labels={["Monthly", "Weekly", "Yearly"]}
      />
    </div>
  );
};

export default SalesReport;
