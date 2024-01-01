import { Flex } from 'antd'
import React from 'react'

type Props = {
    date: string;
}

const ECardDateBox = ({ date }: Props) => {
    return (
        <Flex vertical align='center' style={{
            width: '80px',
            border: '1px solid #2c3e50',
            borderRadius: '0.25rem',
            textAlign: 'center'
        }}>
            <div style={{
                padding: '5px 0',
                fontSize: '15px',
                backgroundColor: '#2c3e50',
                color: 'white',
                fontWeight: 700,
                display: 'block',
                width: '100%'
            }}>
                {date.split('-')[1]}
            </div>

            <div
                style={{
                    fontSize: '28px',
                    fontWeight: 900,
                    color: '#2b2a3f',
                    display: 'block',
                }}
            >
                {date.split('-')[2]}
            </div>
        </Flex>
    )
}

export default ECardDateBox