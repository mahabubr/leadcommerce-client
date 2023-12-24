import { Col, Flex, Row, Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import TransInfroHeader from '../partials/TransInfroHeader';

const { Paragraph } = Typography;

type Props = {}

const TransactionInfo = (props: Props) => {
    return (
        <div style={{
            backgroundColor: '#f8f9fa',
            boxShadow: '0 0.1rem 0.25rem rgba(0, 0, 0, 0.075)',
            padding: '1rem',
            borderRadius: ' 0.25rem',
            border: '1px solid #eee',
        }}>

            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                <Col span={8}>
                    <TransInfroHeader
                        title='Payment info'
                        childParaOne={<>
                            <Image src="/mastercard.png" height={20} width={30} alt='' style={{ background: 'white', border: '1px solid white' }} />
                            <Paragraph style={{ margin: 0, color: '#4f5d77' }}>Master Card **** **** 4768</Paragraph>
                        </>}
                        childParaTwo={<>
                            Business name: Grand Market LLC
                        </>}
                        childParaThree={<>
                            Phone: +1 (800) 555-154-52
                        </>}
                    />
                </Col>

                <Col span={8}>
                    <TransInfroHeader
                        title='Customer'
                        childParaOne={<>
                            John Alexander
                        </>}
                        childParaTwo={<>
                            alex@example.com
                        </>}
                        childParaThree={<>
                            +998 99 22123456
                        </>}
                    />
                </Col>

                <Col span={8}>
                    <TransInfroHeader
                        title='Deliver to'
                        childParaOne={<>
                            City: Tashkent, Uzbekistan
                        </>}
                        childParaTwo={<>
                            Block A, House 123, Floor 2
                        </>}
                        childParaThree={<>
                            Po Box 10000
                        </>}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default TransactionInfo