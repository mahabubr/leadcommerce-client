import { Button, Card, Col, Flex, Row, Typography } from 'antd';
import React from 'react'
import ECardImageBox from '../../partials/cards/ECardImageBox';
import ECardTitleBox from '../../partials/cards/ECardTitleBox';
import ECardDateBox from '../../partials/cards/ECardDateBox';
import { CalendarOutlined, ClockCircleOutlined, EnvironmentOutlined, HeartFilled, PlusOutlined, ReconciliationOutlined, ScheduleOutlined, ShareAltOutlined } from '@ant-design/icons';
import DetailsInfoCard from '../../partials/eDetails/DetailsInfoCard';
const { Paragraph } = Typography;

type Props = {
    data: any;
}

const DetailsCard = ({ data }: Props) => {
    return (
        <Card
            cover={<ECardImageBox title={data.title} image={data.image} _id={data._id} gHeight='auto' />}
            style={{ padding: '10px', borderRadius: 0 }}
        >

            <Flex align='center' justify='space-between' style={{ marginBottom: '20px' }}>
                <Flex gap='middle' align='center'>
                    <ECardDateBox date={data.date} />

                    <ECardTitleBox
                        title={data.title}
                        organizedBy={data.organizedBy}
                        status={data.status}
                        _id={data._id}
                    />
                </Flex>

                <Flex gap='middle' align='center'>
                    <Button
                        type="primary"
                        size="large"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        Get Ticket
                        <PlusOutlined style={{ marginLeft: 8, color: 'white' }} />
                    </Button>

                    <Button
                        size="large"
                        style={{ display: 'flex', alignItems: 'center', height: '43px' }}
                    >
                        Add To Calender
                        <CalendarOutlined style={{ marginLeft: 8, }} />
                    </Button>

                    <Button
                        size="large"
                        style={{ display: 'flex', alignItems: 'center', height: '43px' }}
                    >
                        1201
                        <HeartFilled style={{ marginLeft: 8, color: 'red' }} />
                    </Button>

                    <Button
                        size="large"
                        style={{ height: '43px' }}
                    >
                        <ShareAltOutlined />
                    </Button>
                </Flex>
            </Flex>

            <>
                <Paragraph style={{ marginBottom: '20px', fontSize: '15px', color: '#79788e', lineHeight: 1.7 }}>{data.desc}</Paragraph>
            </>

            <div style={{ padding: '30px', backgroundColor: '#f8f8fa' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col md={12} lg={6}>
                        <DetailsInfoCard
                            icon={<ClockCircleOutlined style={{ fontSize: '28px', color: 'white' }} />}
                            title='Time'
                            specific='11.30 AM - 12.30PM'
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <DetailsInfoCard
                            icon={<EnvironmentOutlined style={{ fontSize: '28px', color: 'white' }} />}
                            title='Location'
                            specific='95 Folsom Ave, San Francisco'
                            bgClr='#06b48a'
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <DetailsInfoCard
                            icon={<ReconciliationOutlined style={{ fontSize: '28px', color: 'white' }} />}
                            title='Ticket Price:'
                            specific='$20'
                            bgClr='#f3c44c'
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <DetailsInfoCard
                            icon={<ScheduleOutlined style={{ fontSize: '28px', color: 'white' }} />}
                            title='Seat:'
                            specific='120'
                            bgClr='#e74c3c'
                        />
                    </Col>
                </Row>
            </div>

        </Card>
    )
}

export default DetailsCard