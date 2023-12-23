'use client'
import React from 'react'
import { Card, Col, Row, Typography } from 'antd';
import TransactionHeader from './components/TransactionHeader';
import TransactionInfo from './components/TransactionInfo';
import ItemTable from './components/ItemTable';
import LatestTransactionTable from './components/LatestTransactionTable';
import LTSearchFilter from './components/LTSearchFilter';

const { Title } = Typography;

const TransactionMainPage = () => {
    return (
        <>
            <Title level={2}>Transactions Details</Title>

            <Card bordered>
                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col className="gutter-row" span={16}>

                        <TransactionHeader />

                        <hr style={{ color: '#a6acb3', opacity: 0.25, marginTop: '30px', marginBottom: '15px' }} />

                        <TransactionInfo />

                        {/* item table */}
                        <div style={{ marginTop: '30px', }}>
                            <Title level={4}>Item List</Title>

                            <div>
                                <ItemTable />
                            </div>
                        </div>

                    </Col>

                    <Col className="gutter-row" span={8}>
                        <Title level={2}>Latest Transactions</Title>

                        <hr style={{ color: '#a6acb3', opacity: 0.25, marginTop: '30px', marginBottom: '30px' }} />

                        <LTSearchFilter />

                        <hr style={{ color: '#a6acb3', opacity: 0.25, marginTop: '30px', marginBottom: '15px' }} />

                        <LatestTransactionTable />
                    </Col>
                </Row>
            </Card>

        </>
    )
}

export default TransactionMainPage