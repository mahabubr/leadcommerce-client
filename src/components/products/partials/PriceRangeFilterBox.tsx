import Slider, { SliderMarks } from "antd/es/slider";
import React from "react";

type Props = {};

const marks: SliderMarks = {
  0: "0",
  50: "50",
  80: "80",
  100: {
    style: {
      color: "#2c3e50",
    },
    label: <strong>100</strong>,
  },
};

const PriceRangeFilterBox = (props: Props) => {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <Slider range marks={marks} included={true} defaultValue={[37, 78]} />
    </div>
  );
};

export default PriceRangeFilterBox;
