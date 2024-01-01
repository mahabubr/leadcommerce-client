'use client'
import { Card, Col, Row, Typography } from 'antd';
import React, { useState } from 'react'
import TableHead from './components/TableHead';
import PaymentTable from './components/PaymentTable';
import SinglePaymentView from './components/SinglePaymentView';
import { useGetAllPaymentsQuery } from '@/redux/payment/paymentApi';

const { Title } = Typography;

const PaymentsViews = () => {

    // states
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(10);
    const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">("asc");

    const [currentClickData, setCurrentClickData] = useState(null);

    /*//** RTK calling of payment data getting */
    const { data: paymentData, isLoading }: { data?: any; isLoading: boolean } =
        useGetAllPaymentsQuery({
            limit: currentLimit,
            page: currentPage,
            sortOrder: currentSortOrder,
        });

    if (isLoading) return <>Loading...</>

    return (
        <>
            <Title level={2} style={{ margin: '30px 0' }}>Transactions</Title>

            <Card bordered style={{ marginRight: '30px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col className="gutter-row" span={18}>

                        <TableHead />
                        <hr style={{ color: '#a6acb3', opacity: 0.25, marginTop: '30px', marginBottom: '30px' }} />
                        <PaymentTable
                            datas={paymentData?.data}
                            setCurrentClickData={setCurrentClickData}
                        />

                    </Col>
                    <Col className="gutter-row" span={6}>
                        <SinglePaymentView
                            currentClickData={currentClickData}
                        />
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default PaymentsViews