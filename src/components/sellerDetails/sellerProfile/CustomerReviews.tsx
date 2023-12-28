import { StarFilled } from "@ant-design/icons";
import React from "react";

const CustomerReviews = () => {
  return (
    <div
    //   style={{ border: "1px solid red" }}
    >
      <h5 style={{ color: "#878aa3", marginBottom: "15px" }}>
        CUSTOMER REVIEWS
      </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <StarFilled style={{ color: "orange" }} />
          <StarFilled style={{ color: "orange" }} />
          <StarFilled style={{ color: "orange" }} />
          <StarFilled style={{ color: "orange" }} />
          <StarFilled style={{ color: "orange" }} />
        </div>
        <div>
          <h6
            style={{
              color: "#878aa3",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            4.5 out of 5
          </h6>
        </div>
      </div>
      <h6
        style={{
          color: "#878aa3",
          fontSize: "15px",
          fontWeight: "500",
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        Total 5.50k reviews
      </h6>
    </div>
  );
};

export default CustomerReviews;
