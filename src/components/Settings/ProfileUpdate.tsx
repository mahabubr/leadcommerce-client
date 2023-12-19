import React from "react";
import ProfileUpdateFrom from "./ProfileUpdateFrom";
import ProfileImageUpload from "./ProfileImageUpload";
import { Divider } from "antd";
import { Button, Flex } from "antd";
import style from "./static/profileUpload.module.css";
const ProfileUpdate = () => {
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.fromDiv}>
          <ProfileUpdateFrom />
        </div>
        <div className={style.imageUpDiv}>
          <ProfileImageUpload />
        </div>
      </div>
      <Divider />
      <div className={style.cardMainDiv}>
        <div className={style.singleCard}>
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
        <div className={style.singleCard}>
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
