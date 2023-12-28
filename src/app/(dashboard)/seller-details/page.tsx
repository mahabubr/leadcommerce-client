"use client";

import React from "react";
import style from "./static/sellerdetails.module.css";
import SellerProfile from "@/components/sellerDetails/sellerProfile/SellerProfile";
import ContactSupport from "@/components/sellerDetails/sellerProfile/ContactSupport";
import SellerDetailsData from "@/components/sellerDetails/sellerDetailsData/SellerDetailsData";
import EmployeeModal from "@/components/ui/EmployeeModal";
import Loader from "@/components/ui/Loader";
import {
  useGetStoreDashboardDataQuery,
  useGetStoreSingleStoreQuery,
} from "@/redux/store/storeApi";
import { CodeSandboxCircleFilled } from "@ant-design/icons";
const SellerDetails = () => {
  const { data, isLoading } = useGetStoreSingleStoreQuery({});
  const { data: dashboardData } = useGetStoreDashboardDataQuery({});

  
  //@ts-ignore
  const store = data?.data;


  if (isLoading) {
    return <Loader />;
  }

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
              <SellerDetailsData store={dashboardData}> </SellerDetailsData>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerDetails;
