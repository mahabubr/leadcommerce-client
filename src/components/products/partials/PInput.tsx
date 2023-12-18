import { Input } from 'antd'
import React from 'react'

type Props = {
    name: string;
    label: string;
    placeholder: string;
}

const PInput = ({ label, name, placeholder }: Props) => {
    return (
        <div>
            <label
                htmlFor={name}
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                }}
            >
                {label}
            </label>

            <Input
                size="large"
                className=''
                style={{ marginTop: '0.5rem' }}
                placeholder={placeholder}
            />
        </div>
    )
}

export default PInput