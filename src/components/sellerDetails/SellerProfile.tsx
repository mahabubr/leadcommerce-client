"use client";
import React from "react";
import { flattenToken } from "@ant-design/cssinjs/lib/util";
import { MailOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, Progress } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

const SellerProfile = () => {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <div
          className='profile'
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
              //   border: "1px solid green",
            }}>
            <Avatar shape='square' size={64} icon={<UserOutlined />} />
            <h5>Force Medicines</h5>
            <small>Since 1987</small>
          </div>
          <div
            style={{
              //   border: "1px solid black",
              marginTop: "20px",
            }}>
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
        <Divider dashed />
        <div>
          <h5 style={{ color: "#878aa3", marginBottom: "15px" }}>
            CUSTOMER REVIEWS
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f3f6f9",
              padding: "3px",
            }}>
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
                }}>
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
            }}>
            Total 5.50k reviews
          </h6>
        </div>
        {/* // progress bars  */}
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
        <Divider dashed />
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
            }}>
            <Button
              type='primary'
              style={{ backgroundColor: "#2c3e50" }}
              icon={<MailOutlined />}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
