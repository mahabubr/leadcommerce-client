import { ColorPicker, Space } from 'antd'
import React from 'react'

type Props = {
    label: string;
}

const PColorPicker = ({ label }: Props) => {
    return (
        <div>
            <label
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    display: 'block'
                }}
            >
                {label}
            </label>

            <Space style={{ marginTop: '0.5rem' }}>
                <ColorPicker
                    allowClear
                    format='hex'
                    value='#1677ff'
                />
                <ColorPicker
                    allowClear
                    format='hex'
                    value='#2765A3'
                />
                <ColorPicker
                    allowClear
                    format='hex'
                    value='#A32764'
                />
                <ColorPicker
                    allowClear
                    format='hex'
                    value='#A39E27'
                />

            </Space>

        </div>
    )
}

export default PColorPicker