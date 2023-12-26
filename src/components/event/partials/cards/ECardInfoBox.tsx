import { Col, Typography } from 'antd'
import React from 'react'
const { Paragraph } = Typography;

type Props = {
    paraOne: React.ReactNode;
    paraTwo: React.ReactNode | string;
}

const ECardInfoBox = ({ paraOne, paraTwo }: Props) => {
    return (
        <>
            <Col xs={6}>
                <Paragraph style={{ fontSize: '16px', color: '#79788e', lineHeight: 1.7 }}>{paraOne}</Paragraph>
            </Col>
            <Col xs={18}>
                {paraTwo}
            </Col>
        </>
    )
}

export default ECardInfoBox