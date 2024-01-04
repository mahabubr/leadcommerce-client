"use client";

import TopCard from "@/components/wallet/TopCard";
import PaymentChart from "../../../components/wallet/PaymentChart";
import ActivitiesTable from "../../../components/wallet/ActivitiesTable";

const Wallet = () => {
  return (
    <div>
      {/* <div
        style={{
          backgroundColor: "white",
          padding: "1vw",
          marginBottom: "1vw",
          borderRadius: "8px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>All Employee</h3>
      </div> */}
      <TopCard />
      <PaymentChart />
      <ActivitiesTable />
    </div>
  );
};

export default Wallet;
