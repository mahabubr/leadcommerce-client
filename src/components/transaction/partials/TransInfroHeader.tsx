import { Flex, Typography } from 'antd';
import Image from 'next/image';
import React from 'react'

const { Paragraph } = Typography;

type Props = {
    title: string;
    childParaOne: React.ReactNode;
    childParaThree: React.ReactNode;
    childParaTwo: React.ReactNode;
}

const TransInfroHeader = ({ title, childParaOne, childParaThree, childParaTwo }: Props) => {
    return (
        <>
            <h6 style={{
                marginBottom: '15px',
                fontSize: '16px',
                color: '#495057',
                fontWeight: 600,
                lineHeight: 1.5,
            }}>
                {title}
            </h6>

            <div>
                <Flex align="center" style={{ gap: '8px' }}>
                    {childParaOne}
                </Flex>

                <Paragraph style={{ margin: '3px 0', color: '#4f5d77' }}>{childParaTwo}</Paragraph>

                <Paragraph style={{ margin: 0, color: '#4f5d77' }}>{childParaThree}</Paragraph>
            </div>
        </>
    )
}

export default TransInfroHeader