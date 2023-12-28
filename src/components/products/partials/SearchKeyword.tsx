import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

type Props = {};

const SearchKeyword = ({ setSearch }: any) => {
  return (
    <div
      style={{
        position: "relative",
        marginTop: "10px",
      }}
    >
      <Input
        size="middle"
        placeholder="Phone, Headphone, shoe ..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        style={{
          background: "white",
          outline: "none",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          right: "8px",
          top: "9px",
          fontSize: "20px",
        }}
      >
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchKeyword;
