import { Button, Card, Col, Flex, Row, Typography } from "antd";
import React from "react";
import ECardImageBox from "../../partials/cards/ECardImageBox";
import ECardTitleBox from "../../partials/cards/ECardTitleBox";
import ECardDateBox from "../../partials/cards/ECardDateBox";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  HeartFilled,
  PlusOutlined,
  ReconciliationOutlined,
  ScheduleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import DetailsInfoCard from "../../partials/eDetails/DetailsInfoCard";
const { Paragraph } = Typography;

type Props = {
  data: any;
};

const DetailsCard = ({ data }: Props) => {
  return (
    <Card
      cover={
        <ECardImageBox
          title={data.title}
          image={data.image?.avatar}
          _id={data._id}
          gHeight="auto"
        />
      }
      style={{ padding: "10px", borderRadius: 0 }}
    >
      <Flex
        align="center"
        justify="space-between"
        style={{ marginBottom: "20px" }}
      >
        <Flex gap="middle" align="center">
          <ECardDateBox date={data.eventDate} />

          <ECardTitleBox
            title={data.title}
            organizedBy={data.organizer}
            status={data.status}
            _id={data._id}
          />
        </Flex>
      </Flex>
      <Flex gap="middle" align="center">
        <Button
          type="primary"
          size="large"
          style={{ display: "flex", alignItems: "center" }}
        >
          Get Ticket
          <PlusOutlined style={{ marginLeft: 8, color: "white" }} />
        </Button>

        <Button
          size="large"
          style={{ display: "flex", alignItems: "center", height: "43px" }}
        >
          Add To Calender
          <CalendarOutlined style={{ marginLeft: 8 }} />
        </Button>

        <Button
          size="large"
          style={{ display: "flex", alignItems: "center", height: "43px" }}
        >
          1201
          <HeartFilled style={{ marginLeft: 8, color: "red" }} />
        </Button>

        <Button size="large" style={{ height: "43px" }}>
          <ShareAltOutlined />
        </Button>
      </Flex>
      <>
        <Paragraph
          style={{
            marginBottom: "20px",
            fontSize: "15px",
            color: "#79788e",
            lineHeight: 5,
          }}
        >
          {data.description.slice(0, 120)}
        </Paragraph>
      </>

      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <DetailsInfoCard
              icon={
                <ClockCircleOutlined
                  style={{ fontSize: "28px", color: "white" }}
                />
              }
              title="Time"
              specific={`${data.startTime} - ${data.endTime}`}
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} style={{ marginTop: 20 }}>
            <DetailsInfoCard
              icon={
                <EnvironmentOutlined
                  style={{ fontSize: "28px", color: "white" }}
                />
              }
              title="Location"
              specific={data.location}
              bgClr="#06b48a"
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12}>
            <DetailsInfoCard
              icon={
                <ReconciliationOutlined
                  style={{ fontSize: "28px", color: "white" }}
                />
              }
              title="Ticket Price:"
              specific={`$${data.ticketPrice}`}
              bgClr="#f3c44c"
            />
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} style={{ marginTop: 20 }}>
            <DetailsInfoCard
              icon={
                <ScheduleOutlined
                  style={{ fontSize: "28px", color: "white" }}
                />
              }
              title="Seat:"
              specific={data.seat}
              bgClr="#e74c3c"
            />
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default DetailsCard;
