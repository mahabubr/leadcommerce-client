import { InputNumber } from 'antd'
import React from 'react'

type Props = {
    name: string;
    label: string;
}

const PInputNumber = ({ label, name }: Props) => {
    return (
        <div>
            <label
                htmlFor={name}
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    display: 'block'
                }}
            >
                {label}
            </label>

            <InputNumber
                min={1}
                defaultValue={0}
                style={{ marginTop: '0.5rem', width: '100%' }}
                size="large"
            />

        </div>
    )
}

export default PInputNumber