import { Flex, Typography } from "antd";
import React from "react";
const { Paragraph } = Typography;

type Props = {
  icon: React.ReactNode;
  title: string;
  specific: string;
  bgClr?: string;
};

const DetailsInfoCard = ({ icon, specific, title, bgClr }: Props) => {
  return (
    <Flex gap="middle" align="center">
      <Flex
        align="center"
        justify="center"
        style={{
          backgroundColor: bgClr ? bgClr : "#1fb1e6",
          borderRadius: "50%",
          height: "65px",
          minWidth: "65px",
        }}
      >
        {icon}
      </Flex>

      <div>
        <Paragraph
          style={{
            marginBottom: "0.25rem",
            fontSize: "16px",
            color: "#4c4a68",
            fontWeight: 700,
          }}
        >
          {title}
        </Paragraph>
        <Paragraph
          style={{
            marginBottom: "0",
            fontSize: "12px",
            color: "#79788e",
            fontWeight: 500,
            letterSpacing: ".01em",
          }}
        >
          {specific}
        </Paragraph>
      </div>
    </Flex>
  );
};

export default DetailsInfoCard;
