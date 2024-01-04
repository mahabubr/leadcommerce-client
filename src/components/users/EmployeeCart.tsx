/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/userComponent.module.css";

const EmployeeCart = ({ employee }: any) => {
  return (
    <div className={`${style.Card} ${style.glassEffect}`}>
      <div className={style.upperContainer}></div>
      <div className={style.imageContainer}>
        <img
          src={employee?.image?.avatar || "https://via.placeholder.com/100"}
          alt="User"
          className={style.img}
        />
      </div>
      <div className={style.lowerContainer}>
        <h3>{employee?.full_name || "N/A"}</h3>
        <p>
          <b>{employee?.email || "N/A"}</b>
        </p>
      </div>
      <div className={style.bottomContainer}>
        <p>{employee?.phone || "N/A"}</p>
        <p>{employee?.country || "N/A"}</p>
      </div>
    </div>
  );
};

export default EmployeeCart;
