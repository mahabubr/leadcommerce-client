import { Select } from 'antd'
import React from 'react'
import { eventDropdownOptions } from '../utils/eventData'

type Props = {
    handleChange: any;
}

const VFilterSelect = ({ handleChange }: Props) => {
    return (
        <Select
            size='large'
            defaultValue={eventDropdownOptions[0].value}
            onChange={handleChange}
            style={{
                width: 200,
                textTransform: "capitalize",
            }}
            options={eventDropdownOptions}
            optionLabelProp="label"
            optionRender={(node) => (
                <span style={{ textTransform: 'capitalize' }}>{node.label}</span>
            )}
        />
    )
}

export default VFilterSelect