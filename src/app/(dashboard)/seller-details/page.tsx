import React from "react";
import style from "./static/sellerdetails.module.css";
import SellerProfile from "@/components/sellerDetails/SellerProfile";
const SellerDetails = () => {
  return (
    <>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Seller Details</h2>
        </div>
        <div className={style.cardBody}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              //   backgroundColor: "#f8f9fa",
            }}>
            <div
              style={{
                // border: "1px solid pink",
                backgroundColor: "#f8f9fa",
                // height: "100vh",
                width: "25%",
              }}>
              <SellerProfile />
            </div>
            <div
              style={{
                // border: "1px solid green",
                width: "75%",
                backgroundColor: "#f8f9fa",
              }}>
              data profile
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDetails;
