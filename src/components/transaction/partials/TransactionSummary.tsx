import { Flex, Typography } from 'antd'
import React from 'react'
const { Paragraph } = Typography

type Props = {
    childOne: React.ReactNode | string;
    childTwo: React.ReactNode;
    css?: React.CSSProperties;
    childTwoStyle?: React.CSSProperties;
}

const TransactionSummary = ({ childOne, childTwo, css, childTwoStyle }: Props) => {
    return (
        <Flex style={css}>
            <div style={{ width: '50%' }}>
                <Paragraph style={{ margin: '0', color: '#4f5d77' }}>{childOne}</Paragraph>
            </div>
            <div>
                <Paragraph style={{ margin: '0', color: '#4f5d77', ...childTwoStyle }}>{childTwo}</Paragraph>
            </div>
        </Flex>
    )
}

export default TransactionSummary