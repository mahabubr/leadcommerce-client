import { Row } from 'antd'
import React from 'react'
import { events } from '../utils/eventData'
import EventCard from './EventCard'

type Props = {}

const EventsGrid = (props: Props) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} style={{ rowGap: '20px' }}>
            {events.map((item) => <EventCard
                key={item._id}
                data={item}
            />)}
        </Row>
    )
}

export default EventsGrid