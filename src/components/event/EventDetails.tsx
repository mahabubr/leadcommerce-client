import React from "react";
import { Col, Row, Typography } from "antd";
import { useGetAEventQuery } from "@/redux/events/eventApi";
import DetailsCard from "./components/eventDetails/DetailsCard";
import AboutEvent from "./components/eventDetails/AboutEvent";
import CoveredDetails from "./components/eventDetails/CoveredDetails";
import Loader from "../ui/Loader";

const { Title } = Typography;

type Props = { eventId: any };

const EventDetails = ({ eventId }: Props) => {
  const { data: event, isLoading }: { data?: any; isLoading: boolean } =
    useGetAEventQuery({ id: eventId });

  if (!event?.data || isLoading) {
    return <Loader />;
  }

  return (
    <Row gutter={[16, 16]}>
      {/* Adjust gutter as needed */}
      <Col xs={24} lg={16}>
        <DetailsCard data={event.data} />
        <AboutEvent data={event.data} />
      </Col>
      <Col xs={24} lg={8}>
        {/* <Speakers /> */}
        <CoveredDetails />
      </Col>
    </Row>
  );
};

export default EventDetails;
