import { Col, Input, Row, Select } from 'antd'
import React from 'react'
import { transactionMethodItems } from '../utils/transactionData'

type Props = {}

const LTSearchFilter = (props: Props) => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col className="gutter-row" span={16}>
                <Input size="large" placeholder="Search..." />
            </Col>
            <Col className="gutter-row" span={8}>
                <Select
                    size="large"
                    placeholder='Method'
                    // onChange={handleChange}
                    style={{ width: '100%' }}
                    options={transactionMethodItems}
                // defaultValue={selected}
                />
            </Col>
        </Row>
    )
}

export default LTSearchFilter