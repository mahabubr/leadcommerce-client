import { Select } from 'antd'
import React from 'react'

type Props = {
    label: string;
    placeholder: string;
    items: { value: any; label: any }[],
    selected: any;
    handleChange: any;
    size?:'large'|'small'|'middle'
}

const PSelect = ({ placeholder, handleChange, items, selected, label,size }: Props) => {
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
                size={size || "large"}
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