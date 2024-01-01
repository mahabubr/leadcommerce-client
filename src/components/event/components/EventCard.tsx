import { Card, Col, Flex, Typography } from 'antd'
import React from 'react'
import VDropDown from '../partials/VDropDown';
import ECardDateBox from '../partials/cards/ECardDateBox';
import ECardTitleBox from '../partials/cards/ECardTitleBox';
import ECardImageBox from '../partials/cards/ECardImageBox';
import ECardInfoWrap from './ECardInfoWrap';
import ECardFooter from '../partials/cards/ECardFooter';
const { Paragraph } = Typography;

type Props = {
    data: any;
}

const EventCard = ({ data }: Props) => {
    return (
        <Col className="gutter-row" sm={24} lg={8}>
            <Card
                cover={<ECardImageBox title={data.title} image={data.image?.avatar} _id={data._id} />}
                style={{ padding: '10px', borderRadius: 8 }}
            >
                <Flex align='center' justify='space-between' style={{ marginBottom: '20px' }}>
                    <Flex gap='middle' align='center'>
                        <ECardDateBox date={data.eventDate} />

                        <ECardTitleBox
                            title={data.eventTitle}
                            organizedBy={data.organizer}
                            status={data.status}
                            _id={data._id}
                        />
                    </Flex>

                    <VDropDown
                        placement='bottomRight'
                    />
                </Flex>

                <>
                    <Paragraph style={{ marginBottom: '20px', fontSize: '15px', color: '#79788e', lineHeight: 1.7 }}>{data.description.slice(0, 120)}</Paragraph>
                    <ECardInfoWrap data={data} />
                    <ECardFooter status={data.status} _id={data._id} />
                </>
            </Card>
        </Col>
    )
}

export default EventCard