/* eslint-disable @next/next/no-img-element */
"use client";

import CandlestickChart from "@/components/ui/TradingChart";
import { Button, Card, Divider } from "antd";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const PaymentChart = () => {
  return (
    <div
      style={{
        marginTop: 50,
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: 50,
      }}
    >
      <Card style={{ boxShadow: "2px 2px 10px grey" }}>
        <CandlestickChart />
      </Card>
      <Card style={{ boxShadow: "2px 2px 10px grey" }}>
        <img
          src="https://freepngimg.com/thumb/credit_card/25637-6-credit-card-visa-and-master-card-transparent-image.png"
          alt=""
          style={{ width: "100%" }}
        />
        <div style={{ marginTop: 10 }}>
          <h2>$ 22,3451,548,544</h2>
          <p>$ 54.45,343,5654</p>
        </div>
        <Divider style={{ margin: 10 }} />
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaAngleDoubleDown />
            <div>
              <h3>$45,15.51</h3>
              <p>Income</p>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <FaAngleDoubleUp />
            <div>
              <h3>$45,15.51</h3>
              <p>Expense</p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <Button type="primary" style={{ width: "100%" }}>
            Receive
          </Button>
          <Button type="primary" danger style={{ width: "100%" }}>
            Send
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PaymentChart;
