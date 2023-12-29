import { Flex, Typography } from 'antd';
import React from 'react'

const { Title } = Typography;

type Props = {
    currentClickData: any;
}

const titleStyle = {
    color: '#495057',
}

const paraStyle = {
    color: '#4f5d77',
}

const SinglePaymentView = ({ currentClickData }: Props) => {
    return (
        <div style={{ padding: '1rem', minHeight: '80%', borderRadius: '0.25rem', border: '1px solid #eee', backgroundColor: '#f8f9fa' }}>
            {!currentClickData ? <p style={{ color: '#adb5bd', marginTop: '5rem', textAlign: 'center' }}>Please select transaction to see details</p> : <>

                <Title level={5} style={titleStyle}>Transaction Details</Title>
                <hr style={{ color: '#a6acb3', opacity: 0.25, margin: '20px 0' }} />

                <Flex style={{ gap: '20px' }} vertical>
                    <div>
                        <Title level={5} style={titleStyle}>Order Id: </Title>
                        <p style={paraStyle}>{currentClickData.order_id}</p>
                    </div>

                    <div>
                        <Title level={5} style={titleStyle}>Shop Id: </Title>
                        <p style={paraStyle}>{currentClickData.shop_id}</p>
                    </div>

                    <div>
                        <Title level={5} style={titleStyle}>Payment Code: </Title>
                        <p style={paraStyle}>{currentClickData.payment_code}</p>
                    </div>

                    <div>
                        <Title level={5} style={titleStyle}>Status: </Title>
                        <p style={paraStyle}>{currentClickData.payment_status}</p>
                    </div>

                    <div>
                        <Title level={5} style={titleStyle}>Total: </Title>
                        <p style={paraStyle}>৳ {currentClickData.total_amount}</p>
                    </div>
                </Flex>


            </>}
        </div>
    )
}

export default SinglePaymentView