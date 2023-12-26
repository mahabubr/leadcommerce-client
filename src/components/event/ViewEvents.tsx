'use client'
import React from 'react'
import { Flex, Typography } from 'antd';
import VEventHeader from './components/VEventHeader';
import EventsGrid from './components/EventsGrid';
import Link from 'next/link';

const { Title } = Typography;

type Props = {}

const ViewEvents = (props: Props) => {
    return (
        <>
            <Flex align='center' justify='space-between'>
                <Title level={3}>Events</Title>

                <Flex>
                    <Link href='/dashboard' style={{ color: '#2b2a3f' }}>Dashboard</Link>
                    <p style={{ margin: '0 5px', color: '#807f9c' }}>/</p>
                    <p style={{ color: '#807f9c' }}>Events</p>
                </Flex>
            </Flex>

            <VEventHeader />

            <EventsGrid />
        </>
    )
}

export default ViewEvents