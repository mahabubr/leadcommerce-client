import { Card, Flex, Typography } from "antd";
import React from "react";
import { coveredArray } from "../../utils/eventData";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type Props = {};

const CoveredDetails = (props: Props) => {
  return (
    <Card style={{ padding: "10px", borderRadius: 0, marginBottom: "30px" }}>
      <Title
        level={5}
        style={{ fontSize: 18, fontWeight: 700, marginBottom: 25 }}
      >
        Speakers
      </Title>

      {coveredArray.map((item, index) => (
        <Flex
          align="center"
          gap="middle"
          key={index}
          style={{ margin: "12px 0" }}
        >
          <CheckCircleOutlined style={{ fontSize: 20, color: "#2c3e50" }} />
          <Paragraph
            style={{
              margin: 0,
              fontSize: "16px",
              color: "#79788e",
              position: "relative",
              top: "-2px",
            }}
          >
            {item}
          </Paragraph>
        </Flex>
      ))}
    </Card>
  );
};

export default CoveredDetails;
