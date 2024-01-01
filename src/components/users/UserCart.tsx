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
  const { full_name, image, phone, address, email }: adminData = admin
    ? admin
    : {};
  return (
    <div className={style.Card}>
      <div className={style.upperContainer}>
        <div className={style.imageContainer}>
          <img
            src={image}
            alt=''
            height='100px'
            width='100px'
            className={style.img}
          />
          {/* <Avatar size='large' icon={<UserOutlined />} /> */}
        </div>
        <div className={style.lowerContainer}>
          <h3>{full_name}</h3>
          <h4>{email}</h4>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
