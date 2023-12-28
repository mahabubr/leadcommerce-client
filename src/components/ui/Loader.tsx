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
      <Lottie animationData={animate} loop={true} />
    </div>
  );
};

export default Loader;
