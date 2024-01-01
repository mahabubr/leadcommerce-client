/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/userComponent.module.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserCart() {
  return (
    <div className={style.Card}>
      <div className={style.upperContainer}>
        <div className={style.imageContainer}>
          <img
            src='https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=1380&t=st=1704083334~exp=1704083934~hmac=b9e525a2316016845062b626b51cc3fadc4ed48cf0397c408798ff1854479461'
            alt=''
            height='100px'
            width='100px'
            className={style.img}
          />
          {/* <Avatar size='large' icon={<UserOutlined />} /> */}
        </div>
        <div className={style.lowerContainer}>
          <h3>JonDoe</h3>
          <h4>email@eamil.com</h4>
          <p>+011579-84-555-55</p>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
