import { Select } from 'antd'
import React from 'react'

type Props = {
    label: string;
    placeholder: string;
    items: { value: any; label: any }[],
    selected: any;
    handleChange: any;
}

const PSelect = ({ placeholder, handleChange, items, selected, label }: Props) => {
    return (
        <div>
            <label
                style={{
                    textTransform: 'uppercase',
                    fontWeight: 500,
                }}
            >
                {label}
            </label>

            <Select
                size="large"
                placeholder={placeholder}
                onChange={handleChange}
                style={{ width: '100%', marginTop: '0.5rem' }}
                options={items}
                defaultValue={selected}
            />
        </div>
    )
}

export default PSelect