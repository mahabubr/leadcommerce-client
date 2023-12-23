import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

const SellerInformation = ({ store }: any) => {
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
        <Avatar
          src={store.logo}
          shape="square"
          size={64}
          icon={<UserOutlined />}
        />
        <h5>{store.name}</h5>
        <small>{new Date(store.createdAt).toDateString()}</small>
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
                <span style={{ fontWeight: "400" }}>Owner</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.owner_name}
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Type</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.company_type}
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Email</span>
              </th>

              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.email}
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Website</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.website}
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Contact</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.contact_no}
                </span>
              </td>
            </tr>
            <tr>
              <th style={{ height: "3.5rem" }}>
                <span style={{ fontWeight: "400" }}>Location</span>
              </th>
              <td>
                <span style={{ marginLeft: "18px", fontSize: "14px" }}>
                  {store.location}
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
