/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/userComponent.module.css";

interface AdminData {
  full_name: string;
  image: {
    avatar: string;
  };
  phone: string;
  address: string;
  email: string;
}

interface Props {
  admin?: AdminData;
}

const UserCart: React.FC<Props> = ({ admin }) => {
  return (
    <div className={`${style.Card} ${style.glassEffect}`}>
      <div className={style.upperContainer}></div>
      <div className={style.imageContainer}>
        <img
          src={admin?.image?.avatar || "https://via.placeholder.com/100"}
          alt="User"
          className={style.img}
        />
      </div>
      <div className={style.lowerContainer}>
        <h3>{admin?.full_name || "N/A"}</h3>
        <p>
          <b>{admin?.email || "N/A"}</b>
        </p>
      </div>
      <div className={style.bottomContainer}>
        <p>{admin?.phone || "N/A"}</p>
        <p>{admin?.address || "N/A"}</p>
      </div>
    </div>
  );
};

export default UserCart;
