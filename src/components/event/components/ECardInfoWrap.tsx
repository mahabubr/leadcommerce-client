import React from "react";
import ECardInfoBox from "../partials/cards/ECardInfoBox";
import { Flex, Row, Typography } from "antd";
import Image from "next/image";
const { Paragraph } = Typography;

type Props = {
  data: any;
};

const imgStyle: React.CSSProperties = {
  border: "2px solid #fff",
  borderRadius: "50%",
  filter: " drop-shadow(0 4px 4px rgba(101,96,240,.1))",
  marginRight: "-10px",
};

const ECardInfoWrap = ({ data }: Props) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
      <ECardInfoBox
        paraOne="LOCATION:"
        paraTwo={
          <Paragraph
            style={{ fontSize: "16px", color: "#79788e", lineHeight: 1.7 }}
          >
            {data.location}
          </Paragraph>
        }
      />
    </Row>
  );
};

export default ECardInfoWrap;
