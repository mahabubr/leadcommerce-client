"use client";
import React from "react";
import { Empty, Flex, Spin, Typography } from "antd";
import VEventHeader from "./components/VEventHeader";
import EventsGrid from "./components/EventsGrid";
import Link from "next/link";
import { useGetAllEventsQuery } from "@/redux/events/eventApi";
import Loader from "../ui/Loader";

const { Title } = Typography;

type Props = {};

const ViewEvents = (props: Props) => {
  /*//** RTK calling of product data getting */
  const { data: events, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllEventsQuery(undefined);

  if (isLoading) return <Loader />;

  return (
    <>
      {/* <VEventHeader /> */}
      {events?.data?.length ? <EventsGrid datas={events?.data} /> : <Empty />}
    </>
  );
};

export default ViewEvents;
