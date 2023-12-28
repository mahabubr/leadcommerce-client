'use client'
import React from 'react'
import { Col, Flex, Row, Typography } from 'antd';
import { events } from './utils/eventData';
import DetailsCard from './components/eventDetails/DetailsCard';
import AboutEvent from './components/eventDetails/AboutEvent';
import Speakers from './components/eventDetails/Speakers';
import CoveredDetails from './components/eventDetails/CoveredDetails';
import Link from 'next/link';

const { Title } = Typography;

type Props = { eventId: any; }

const EventDetails = ({ eventId }: Props) => {

    const data = events.find((item) => item._id === Number(eventId));

    if (!data) return <>No Data....</>

    return (
        <>
            <Flex align='center' justify='space-between'>
                <Title level={3}>Event Details</Title>

                <Flex>
                    <Link href='/dashboard' style={{ color: '#2b2a3f' }}>Dashboard</Link>
                    <p style={{ margin: '0 5px', color: '#807f9c' }}>/</p>
                    <p style={{ color: '#807f9c' }}>Event Details</p>
                </Flex>
            </Flex>

            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col xs={24} lg={16}>
                    <DetailsCard data={data} />
                    <AboutEvent data={data} />
                </Col>
                <Col xs={24} lg={8}>
                    <Speakers />
                    <CoveredDetails />
                </Col>
            </Row>
        </>
    )
}

export default EventDetails