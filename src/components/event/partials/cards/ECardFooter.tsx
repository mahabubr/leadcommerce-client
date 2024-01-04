import { ArrowRightOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import Link from "next/link";
import React from "react";
const { Paragraph } = Typography;

type Props = {
  status: boolean;
  _id: string;
};

const ECardFooter = ({ status, _id }: Props) => {
  return (
    <Link href={`/store/event/${_id}`}>
      <Flex
        justify="space-between"
        align="center"
        style={{
          background: "#f8f8fc",
          padding: "10px",
          marginTop: "15px",
        }}
      >
        <Paragraph
          style={{
            marginBottom: "0px",
            fontSize: "15px",
            fontWeight: 500,
            color: "#8e8da1",
            lineHeight: 1.7,
            letterSpacing: ".01em",
            borderRadius: "2px",
          }}
        >
          {status ? "Open" : "Closed"}
        </Paragraph>

        <ArrowRightOutlined style={{ color: "#8e8da1", fontWeight: 700 }} />
      </Flex>
    </Link>
  );
};

export default ECardFooter;
