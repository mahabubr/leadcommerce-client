import { Flex } from "antd";
import React from "react";

type Props = {
  date: string;
};

const ECardDateBox = ({ date }: Props) => {
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{
        width: "60px",
        height: "60px",
        border: "1px solid #2c3e50",
        borderRadius: "50%",
        textAlign: "center",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          padding: "5px 0",
          fontSize: "15px",
          backgroundColor: "#2c3e50",
          color: "white",
          fontWeight: 700,
          width: "100%",
        }}
      >
        {month}
      </div>

      <div
        style={{
          fontSize: "28px",
          fontWeight: 900,
          color: "#2b2a3f",
          lineHeight: 1,
          marginTop: "2px",
        }}
      >
        {day}
      </div>
    </Flex>
  );
};

export default ECardDateBox;
