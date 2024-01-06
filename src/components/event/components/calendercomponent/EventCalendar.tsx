"use client";

import type { Dayjs } from "dayjs";
import type { BadgeProps, CalendarProps } from "antd";
import { Badge, Calendar } from "antd";
import { useGetAllEventsQuery } from "@/redux/events/eventApi";
import { useEffect } from "react";
import Loader from "@/components/ui/Loader";
import { MonthNameToNumber } from "@/Helper/CommonFunction";

const getListData = (value: Dayjs,data:any) => {
  let listData:any=[];
  console.log(listData,'listData',value.month(),value.year());
   data?.map((item:any)=>{
      let [year,month,date]=item.eventDate.split("-");
      if((value.date()===Number(date||0)) && (value.month()===MonthNameToNumber(month)-1) ){
        listData.push( {type:"warning",content:item?.description})
      }
  });

  return listData;
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const EventCalendar = () => {
  const {data,isLoading}:any=useGetAllEventsQuery({})

  useEffect(()=>{
    console.log(data,isLoading)
  },[data])

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value,data?.data);
    return (
      <ul className="events">
        {listData.map((item:any) => (
          <li key={item?.content}>
            <Badge
              status={item?.type as BadgeProps["status"]}
              text={item?.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  
  return isLoading?<Loader/>:<Calendar style={{padding: 30, borderRadius: 8}} cellRender={cellRender} />;
};

export default EventCalendar;
