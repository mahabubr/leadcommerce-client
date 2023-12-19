import { Checkbox } from 'antd'
import React from 'react'

const PCheckbox = ({ label, cStyle }: { label: string; cStyle?: any }) => {
    return (
        <div>
            <Checkbox
                style={cStyle}
            >
                <span className="inner-checkbox" style={cStyle} />
                {label}
            </Checkbox>
        </div>
    )
}

export default PCheckbox