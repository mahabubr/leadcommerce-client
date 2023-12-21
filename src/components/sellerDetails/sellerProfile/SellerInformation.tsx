import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const SellerInformation = () => {
  return (
    <div
      style={{ overflowX: "scroll" }}
      //   style={{ border: "1px solid red" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <h5>Force Medicines</h5>
        <small>Since 1987</small>
      </div>
      <div
        style={{
          //   border: "1px solid black",
          marginTop: "20px",
        }}
      >
        <table style={{ width: "90%" }}>
          <tbody>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Owner Name</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {" "}
                  David Marshall
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Company Type</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {" "}
                  Partnership
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Email</span>
              </th>

              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  forcemedicines@gamil.com
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Website</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  www.forcemedicines.com
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Contact No.</span>
              </th>
              <td>
                {" "}
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  +(123) 9876 654 321
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Fax</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  +1 999 876 5432
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Location</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  United Kingdom
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerInformation;
