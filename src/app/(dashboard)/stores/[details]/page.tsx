"use client";

import React from "react";
import style from "./static/sellerdetails.module.css";
import SellerProfile from "@/components/sellerDetails/sellerProfile/SellerProfile";
import SellerDetailsData from "@/components/sellerDetails/sellerDetailsData/SellerDetailsData";
import EmployeeModal from "@/components/ui/EmployeeModal";
import { useRouter } from "next/navigation";
import { useGetSingleStoreQuery } from "@/redux/store/storeApi";
import Loader from "@/components/ui/Loader";
const SellerDetails = ({ params }: any) => {
  const id = params?.details;

  const { data, isLoading } = useGetSingleStoreQuery({ id });

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
                borderRadius: "5px",
              }}
            >
              <SellerDetailsData store={store}></SellerDetailsData>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDetails;
