"use client";

import React from "react";
import style from "./static/sellerdetails.module.css";
import SellerProfile from "@/components/sellerDetails/sellerProfile/SellerProfile";
import ContactSupport from "@/components/sellerDetails/sellerProfile/ContactSupport";
import SellerDetailsData from "@/components/sellerDetails/sellerDetailsData/SellerDetailsData";
import EmployeeModal from "@/components/ui/EmployeeModal";
import Loader from "@/components/ui/Loader";
import { useGetStoreSingleStoreQuery } from "@/redux/store/storeApi";
const SellerDetails = () => {
  const { data, isLoading } = useGetStoreSingleStoreQuery({});

  if (isLoading) {
    return <Loader />;
  }

  //@ts-ignore
  const store = data?.data;

  return (
    <>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Seller Details</h2>
          <EmployeeModal />
        </div>
        <div className={style.cardBody}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div
              style={{
                // border: "1px solid pink",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                width: "25%",
              }}
            >
              <SellerProfile store={store} />
            </div>
            <div
              style={{
                // border: "1px solid green",
                width: "75%",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
              }}
            >
              <SellerDetailsData store={store}> </SellerDetailsData>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDetails;
