import React from 'react'
import PCheckbox from './PCheckbox'
import { Space } from 'antd'

type Props = {}

const CategoryFilterBox = (props: Props) => {
    return (
        <Space direction="vertical" size={14}>
            <PCheckbox label='All' />
            <PCheckbox label='Accessories' />
            <PCheckbox label='Phone' />
            <PCheckbox label='Headphone' />
            <PCheckbox label='Camera' />
        </Space>
    )
}

export default CategoryFilterBox