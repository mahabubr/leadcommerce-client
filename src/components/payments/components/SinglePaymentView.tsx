import { Flex, Tag, Typography } from "antd";
import React from "react";

const { Title } = Typography;

type Props = {
  currentClickData: any;
};

const titleStyle = {
  color: "#495057",
};

const paraStyle = {
  color: "#4f5d77",
};

const SinglePaymentView = ({ currentClickData }: any) => {
  console.log(currentClickData);

  return (
    <div
      style={{
        padding: "1rem",
        minHeight: "80%",
        width: "100%",
      }}
    >
      {!currentClickData ? (
        <p style={{ color: "#adb5bd", marginTop: "5rem", textAlign: "center" }}>
          Please select transaction to see details
        </p>
      ) : (
        <>
          <Flex style={{ gap: "20px" }} vertical>
            <div>
              <Title level={5} style={titleStyle}>
                Order Id:{" "}
              </Title>
              <p style={paraStyle}>{currentClickData?.order_id?._id}</p>
            </div>

            <div>
              <Title level={5} style={titleStyle}>
                Delivery Email:{" "}
              </Title>
              <p style={paraStyle}>
                {currentClickData?.order_id?.delivery_email}
              </p>
            </div>

            <div>
              <Title level={5} style={titleStyle}>
                Payment Code:{" "}
              </Title>
              <p style={paraStyle}>{currentClickData?.order_id?.order_code}</p>
            </div>

            <div>
              <Title level={5} style={titleStyle}>
                Status:{" "}
              </Title>
              <Tag color="green">{currentClickData?.payment_status}</Tag>
            </div>

            <div>
              <Title level={5} style={titleStyle}>
                Total:{" "}
              </Title>
              <p style={paraStyle}>$ {currentClickData?.total_amount}</p>
            </div>
          </Flex>
        </>
      )}
    </div>
  );
};

export default SinglePaymentView;
