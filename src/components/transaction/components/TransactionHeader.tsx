import { CalendarOutlined, PrinterOutlined } from '@ant-design/icons'
import { Button, Flex, Typography } from 'antd'
import React from 'react'

const { Paragraph } = Typography;

type Props = {}

const TransactionHeader = (props: Props) => {
    return (
        <Flex align="center" justify='space-between' style={{ marginTop: '10px', gap: '5px' }}>

            <div>
                <Paragraph style={{ margin: 0 }}><CalendarOutlined /> Wed, Aug 13, 2022, 4:34PM</Paragraph>
                <Paragraph style={{ margin: 0, color: '#adb5bd' }}>Transaction ID: 3453012</Paragraph>
                <Paragraph style={{ margin: 0, color: '#adb5bd' }}>Transaction Hash: 1a7b7c1b33d161f45804730c70b75175dccd9883</Paragraph>

                <Flex align="center" style={{ marginTop: '10px', gap: '5px' }}>
                    Status: <span style={{
                        padding: '0.1em 0.6em',
                        borderRadius: '50rem',
                        color: '#00B517',
                        backgroundColor: '#ccf0d1',
                        borderColor: '#b3e9b9',
                    }}>Success</span>
                </Flex>
            </div>

            <div>
                <Flex gap="middle">
                    <Button
                        type="primary"
                        size="large"
                    >
                        Download PDF
                    </Button>

                    <Button
                        size="large"
                        icon={<PrinterOutlined />}
                    >
                        Print
                    </Button>
                </Flex>
            </div>
        </Flex>
    )
}

export default TransactionHeader