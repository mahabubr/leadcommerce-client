import { Card, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

type Props = {
  data: any;
};

const AboutEvent = ({ data }: Props) => {
  return (
    <Card
      style={{
        padding: "10px",
        borderRadius: 0,
        marginTop: "30px",
        boxShadow: "3px 3px 15px #ddd",
      }}
    >
      <Title
        level={5}
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 20,
        }}
      >
        About The Event
      </Title>

      <Paragraph
        style={{
          marginBottom: 0,
          color: "#79788e",
          lineHeight: 1.7,
          fontSize: "16px",
          textAlign: "justify",
        }}
      >
        {data.description}
      </Paragraph>
    </Card>
  );
};

export default AboutEvent;
