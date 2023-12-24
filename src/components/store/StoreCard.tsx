/* eslint-disable @next/next/no-img-element */
import SpineChart from "@/components/dashboard/SplineChart";
import { Button } from "antd";
import Link from "next/link";

const StoreCard = ({ store }: any) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: 20,
        borderRadius: 8,
        textAlign: "center",
      }}
    >
      <div>
        <img
          src={store.logo}
          alt=""
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
        <h4 style={{ marginTop: 20 }}>{store.name}</h4>
        <p style={{ fontSize: 14 }}>{store.owner_name}</p>
      </div>
      <div>
        <SpineChart />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div>
          <p>{store.total_orders}</p>
          <p style={{ fontSize: 14, color: "grey" }}>Total Orders</p>
        </div>
        <div>
          <p>${store.refund}</p>
          <p style={{ fontSize: 14, color: "grey" }}>Refund</p>
        </div>
      </div>
      <div style={{ marginTop: 20, width: "100%" }}>
        <Link href={`/stores/${store._id}`}>
          <Button type="default" style={{ width: "100%" }}>
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
