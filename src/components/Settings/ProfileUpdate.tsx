import React from "react";
import ProfileUpdateFrom from "./ProfileUpdateFrom";
import ProfileImageUpload from "./ProfileImageUpload";
import { Divider } from "antd";
import { Button, Flex } from "antd";
const ProfileUpdate = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}>
        <div
          style={{
            width: "60%",
            padding: "1rem",
            // border: "1px solid red",
          }}>
          <ProfileUpdateFrom />
        </div>
        <div
          style={{
            display: "flex",
            // border: "1px solid red",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
          }}>
          <ProfileImageUpload />
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
        }}>
        <div
          style={{
            width: "45%",
          }}>
          <div
            style={{
              height: "100px",
              padding: "1rem",
              fontSize: "16px",
              backgroundColor: "#ecf0f1",
            }}>
            <Button
              size='small'
              style={{
                float: "inline-end",
                backgroundColor: "#2c3e50",
                color: "#ecf0f1",
              }}>
              Change
            </Button>
            <h6 style={{ fontSize: "1rem" }}>Password</h6>
            <small style={{ color: "#2c3e50" }}>
              You can reset or change your password by clicking here
            </small>
          </div>
        </div>
        <div
          style={{
            width: "45%",
          }}>
          <div
            style={{
              height: "100px",
              padding: "1rem",
              fontSize: "16px",
              backgroundColor: "#ecf0f1",
            }}>
            <Button
              size='small'
              style={{
                float: "inline-end",
                backgroundColor: "#2c3e50",
                color: "#ecf0f1",
              }}>
              Deactivate
            </Button>
            <h6 style={{ fontSize: "1rem" }}>Remove</h6>
            <small style={{ color: "#2c3e50" }}>
              Once you delete your account, there is no going back
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
