'use client'
import React from 'react'
import { Typography } from 'antd';
import VEventHeader from './components/VEventHeader';
import EventsGrid from './components/EventsGrid';

const { Title } = Typography;

type Props = {}

const ViewEvents = (props: Props) => {
    return (
        <>
            <Title level={3}>Events</Title>

            <VEventHeader />

            <EventsGrid />
        </>
    )
}

export default ViewEvents