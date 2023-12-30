"use client";

import React from "react";
import style from "./static/sellerdetails.module.css";
import SellerProfile from "@/components/sellerDetails/sellerProfile/SellerProfile";
import SellerDetailsData from "@/components/sellerDetails/sellerDetailsData/SellerDetailsData";
// import EmployeeModal from "@/components/ui/EmployeeModal";
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
    <div className={style.container}>
      <section className={style.contentMain}>
        <div className={style.contentHeader}>
          <h2 className={style.contentTitle}>Store Details</h2>
          {/* <EmployeeModal /> */}
        </div>
        <div className={style.cardBody}>
          <div className={style.mainDiv}>
            <div className={style.SellerProfile}>
              <SellerProfile store={store} />
            </div>
            <div className={style.SellerDetailsData}>
              <SellerDetailsData store={store}></SellerDetailsData>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerDetails;
