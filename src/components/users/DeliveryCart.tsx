/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/userComponent.module.css";

const EmployeeCart = ({ delivery }: any) => {
  return (
    <div className={`${style.Card} ${style.glassEffect}`}>
      <div className={style.upperContainer}></div>
      <div className={style.imageContainer}>
        <img
          src={delivery?.image?.avatar || "https://via.placeholder.com/100"}
          alt="User"
          className={style.img}
        />
      </div>
      <div className={style.lowerContainer}>
        <h3>{delivery?.full_name || "N/A"}</h3>
        <p>
          <b>{delivery?.email || "N/A"}</b>
        </p>
      </div>
      <div className={style.bottomContainer}>
        <p>{delivery?.phone || "N/A"}</p>
        <p>{delivery?.address || "N/A"}</p>
      </div>
    </div>
  );
};

export default EmployeeCart;
