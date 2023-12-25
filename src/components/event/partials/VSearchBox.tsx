import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

type Props = {}

const VSearchBox = (props: Props) => {
    return (
        <div className='' style={{ position: 'relative' }}>
            <Input size="large" placeholder="Search Event" style={{
                background: '#f5f4fa',
                padding: '14px 20px',
                width: '340px',
                color: '#2b2a3f',
            }} />

            <button style={{
                background: 'transparent',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'absolute',
                right: '15px',
                top: '15px',
                fontSize: '24px',
                color: '#2c3e50'
            }}>
                <SearchOutlined />
            </button>
        </div>
    )
}

export default VSearchBox