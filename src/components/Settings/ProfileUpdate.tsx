import React from "react";
import ProfileUpdateFrom from "./ProfileUpdateFrom";
import ProfileImageUpload from "./ProfileImageUpload";

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
            padding: "3rem",
          }}>
          <ProfileUpdateFrom />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop:"10%",
            flex: "1",
          }}>
          <ProfileImageUpload />
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
