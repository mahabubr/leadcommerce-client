"use client";
import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import TransactionHeader from "./components/TransactionHeader";
import TransactionInfo from "./components/TransactionInfo";
import ItemTable from "./components/ItemTable";
import LatestTransactionTable from "./components/LatestTransactionTable";
import LTSearchFilter from "./components/LTSearchFilter";
import { useGetPaymentQuery } from "@/redux/payment/paymentApi";
import Loader from "../ui/Loader";

const { Title } = Typography;

const TransactionMainPage = ({ transactionId }: { transactionId: string }) => {
  /*//** RTK calling of payment data getting */
  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetPaymentQuery({ id: transactionId });

  // loading
  if (isLoading) return <Loader />;

  return (
    <>
      <Card
        title="Transaction Details"
        extra={
          <Button type="primary" size="small" onClick={() => window.print()}>
            Print
          </Button>
        }
        bordered
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col className="gutter-row" span={24}>
            <TransactionHeader data={data?.data} />

            <hr
              style={{
                color: "#a6acb3",
                opacity: 0.25,
                marginTop: "30px",
                marginBottom: "15px",
              }}
            />

            <TransactionInfo data={data?.data} />

            {/* item table */}
            <div style={{ marginTop: "30px" }}>
              <div>
                <ItemTable items={data?.data?.products} />
              </div>
            </div>
          </Col>

          {/* <Col className="gutter-row" span={8}>
            <Title level={2}>Latest Transactions</Title>

            <hr
              style={{
                color: "#a6acb3",
                opacity: 0.25,
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />

            <LTSearchFilter />

            <hr
              style={{
                color: "#a6acb3",
                opacity: 0.25,
                marginTop: "30px",
                marginBottom: "15px",
              }}
            />

            <LatestTransactionTable />
          </Col> */}
        </Row>
      </Card>
    </>
  );
};

export default TransactionMainPage;
