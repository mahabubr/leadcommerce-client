import { MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const ContactSupport = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h5 style={{ color: "#878aa3", marginBottom: "15px" }}>
        CONTACT SUPPORT
      </h5>
      <TextArea rows={4} />
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          alignItems: "end",
          justifyContent: "end",
        }}
      >
        <Button type="primary" size="middle" icon={<MailOutlined />}>
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactSupport;
