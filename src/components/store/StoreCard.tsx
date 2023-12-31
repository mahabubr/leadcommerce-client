/* eslint-disable @next/next/no-img-element */
import SpineChart from "@/components/dashboard/SplineChart";
import { Button } from "antd";
import Link from "next/link";
import style from "./static/storeComponent.module.css";

const StoreCard = ({ store }: any) => {
  return (
    <div className={style.storeCard}>
      <div>
        <img
          src={store.logo}
          alt=""
          style={{
            marginTop: 5,
            width: 70,
            height: 70,
            borderRadius: "50%",
            border: "3px solid #393f47",
          }}
        />
        <div>
          <h4 style={{ marginTop: 20 }}>{store.name}</h4>
          <p style={{ fontSize: 14 }}>{store.owner_name || "N/A"}</p>
        </div>
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
          <p>{store.total_orders || "N/A"}</p>
          <p style={{ fontSize: 14, color: "grey" }}>Total Orders</p>
        </div>
        <div>
          <p>${store.refund || "N/A"}</p>
          <p style={{ fontSize: 14, color: "grey" }}>Refund</p>
        </div>
      </div>
      <div style={{ marginTop: 20, width: "100%" }}>
        <Link href={`/admin/stores/${store._id}`}>
          <Button
            type="primary"
            style={{
              width: "100%",
              color: "white",
              fontWeight: "400",
              letterSpacing: "2px",
            }}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default StoreCard;
