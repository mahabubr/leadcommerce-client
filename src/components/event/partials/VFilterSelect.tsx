import { Select } from "antd";
import React from "react";
import { eventDropdownOptions, events } from "../utils/eventData";

type Props = {
  selected: string;
  handleChange: any;
};

const VFilterSelect = ({ selected, handleChange }: Props) => {
  return (
    <Select
      size="large"
      // defaultValue={eventDropdownOptions[0].value === 'all' && `All (${events.length})`}
      value={selected === "all" ? `All (${events.length})` : selected}
      onChange={handleChange}
      style={{
        width: 200,
        textTransform: "capitalize",
      }}
      options={eventDropdownOptions}
      optionLabelProp="label"
      optionRender={(node) => (
        <span style={{ textTransform: "capitalize" }}>
          {node.label}
          {node.value === "all" && <>&nbsp;({events.length})</>}
        </span>
      )}
    />
  );
};

export default VFilterSelect;
