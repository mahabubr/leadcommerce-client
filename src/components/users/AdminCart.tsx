/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/userComponent.module.css";
type adminData = {
  full_name: string;
  image: string;
  phone: string;
  address: string;
  email: string;
};
function UserCart({ admin }: { admin?: any }) {
  // const { full_name, image, phone, address, email }: adminData = admin
  //   ? admin
  //   : {};
  return (
    // <div className={style.Card}>
    //   <div className={style.upperContainer}>
    //     <div className={style.imageContainer}>
    //       <img
    //         src={image}
    //         alt=''
    //         height='100px'
    //         width='100px'
    //         className={style.img}
    //       />
    //       {/* <Avatar size='large' icon={<UserOutlined />} /> */}
    //     </div>
    //     <div className={style.lowerContainer}>
    //       <h3>{full_name}</h3>
    //       <h4>{email}</h4>
    //       <p>{phone}</p>
    //       <p>{address}</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div
        style={{
          display: "flex",
          // border: "1px solid red",
          width: "400px",
          borderRadius: "10px",
          overflow: "hidden",
          height: "300px",
        }}>
        <div
          style={{
            // border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRight: "none",
            width: "30%",
            zIndex: "100",
            background: "linear-gradient(to left, #ecf0f1, #b4babb)",
          }}>
          <div className={style.imageContainer}>
            <img
              src='https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'
              alt=''
              height='100px'
              width='100px'
              className={style.img}
            />
          </div>
        </div>
        <div
          style={{
            zIndex: "0",
            border: "1px solid rgba(183, 183, 183, 0.3)",
            borderLeft: "none",
            flex: "1",
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}>
          <div
            style={{
              // border: "1px solid red",
              marginLeft: "2.5vw",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              height: "100%",
              position: "absolute",
            }}>
            <h3>A Large Heading</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti, illum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCart;
