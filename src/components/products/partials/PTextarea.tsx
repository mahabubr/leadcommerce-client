import TextArea from 'antd/es/input/TextArea'
import React from 'react'

type Props = {
    name: string;
    label: string;
    placeholder: string;
}

const PTextarea = ({ name, label, placeholder }: Props) => {
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

            <TextArea
                rows={4}
                placeholder={placeholder}
                maxLength={6}
                style={{ marginTop: '0.5rem' }}
            />
        </div>
    )
}

export default PTextarea