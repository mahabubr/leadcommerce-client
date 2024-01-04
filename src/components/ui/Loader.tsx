"use client";

import { Spin } from "antd";
import Lottie from "lottie-react";
import animate from "../../assets/loading.json";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "400px", height: "400px" }}>
        {" "}
        {/* Adjust the size here */}
        <Lottie animationData={animate} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
