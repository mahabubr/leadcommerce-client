import React from "react";
import style from "./static/profilesetting.module.css";
const ProfileSetting = () => {
  return (
    <>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Profile Setting</h2>
        </div>
        <div className={style.card}>
          <div className={style.cardBody}></div>
        </div>
      </section>
    </>
  );
};

export default ProfileSetting;
