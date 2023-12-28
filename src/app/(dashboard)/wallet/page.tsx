"use client";

import TopCard from "@/components/wallet/TopCard";
import PaymentChart from "../../../components/wallet/PaymentChart";
import ActivitiesTable from "../../../components/wallet/ActivitiesTable";

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
