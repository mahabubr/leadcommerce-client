"use client";

import TopCard from "@/components/wallet/TopCard";
import PaymentChart from "./PaymentChart";
import ActivitiesTable from "./ActivitiesTable";

const Wallet = () => {
  return (
    <div>
      <TopCard />
      <PaymentChart />
      <ActivitiesTable />
    </div>
  );
};

export default Wallet;
