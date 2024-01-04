"use client";
import { Card, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import TableHead from "./components/TableHead";
import PaymentTable from "./components/PaymentTable";
import SinglePaymentView from "./components/SinglePaymentView";
import { useGetAllPaymentsQuery } from "@/redux/payment/paymentApi";
import Loader from "../ui/Loader";

const { Title } = Typography;

const PaymentsViews = () => {
  // states
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentLimit, setCurrentLimit] = useState<number>(10);
  const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">(
    "asc"
  );

  const [currentClickData, setCurrentClickData] = useState(null);

  /*//** RTK calling of payment data getting */
  const { data: paymentData, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllPaymentsQuery({
      limit: currentLimit,
      page: currentPage,
      sortOrder: currentSortOrder,
    });

  if (isLoading) return <Loader />;

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={18}>
          <Card
            title="Transactions"
            extra={<TableHead />}
            bordered
            style={{ marginBottom: "30px" }}
          >
            <PaymentTable
              datas={paymentData?.data}
              setCurrentClickData={setCurrentClickData}
              setCurrentPage={setCurrentPage}
              setCurrentLimit={setCurrentLimit}
              isLoading={isLoading}
              currentPage={currentPage}
              currentLimit={currentLimit}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Payment Details"
            bordered
            style={{ marginBottom: "30px" }}
          >
            <SinglePaymentView currentClickData={currentClickData} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PaymentsViews;
