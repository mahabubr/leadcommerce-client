import { CalendarOutlined, PrinterOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import moment from "moment";
import React from "react";

const { Paragraph } = Typography;

type Props = {
  data: any;
};

const TransactionHeader = ({ data }: Props) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{ marginTop: "10px", gap: "5px" }}
    >
      <div>
        <Paragraph style={{ margin: 0 }}>
          <CalendarOutlined />
          {moment(data?.createdAt).format("DD.MM.YYYY, HH:mm")}
        </Paragraph>
        <Paragraph style={{ margin: 0, color: "#adb5bd" }}>
          Transaction Id: {data?.order_id}
        </Paragraph>

        <Flex align="center" style={{ marginTop: "10px", gap: "5px" }}>
          Status:
          <span
            style={{
              padding: "0.1em 0.6em",
              borderRadius: "50rem",
              color: "#00B517",
              backgroundColor: "#ccf0d1",
              borderColor: "#b3e9b9",
            }}
          >
            {data?.payment_status}
          </span>
        </Flex>
      </div>
    </Flex>
  );
};

export default TransactionHeader;
