import { Progress } from "antd";
import React from "react";

const ProgressBar = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ width: "20%", fontWeight: "500" }}>5 star</h5>
        <Progress percent={90} size='small' style={{ width: "80%" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ width: "20%", fontWeight: "500" }}>4 star</h5>
        <Progress percent={75} size='small' style={{ width: "80%" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ width: "20%", fontWeight: "500" }}>3 star</h5>
        <Progress percent={70} size='small' style={{ width: "80%" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ width: "20%", fontWeight: "500" }}>2 star</h5>
        <Progress percent={45} size='small' style={{ width: "80%" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5 style={{ width: "20%", fontWeight: "500" }}>1 star</h5>
        <Progress percent={30} size='small' style={{ width: "80%" }} />
      </div>
    </div>
  );
};

export default ProgressBar;
