import { Checkbox } from 'antd'
import React from 'react'

const PCheckbox = ({ label }: { label: string }) => {
    return (
        <div>
            <Checkbox
            // style={{
            //     width: '40px',
            //     height: '40px',
            // }}
            >
                {label}
            </Checkbox>
        </div>
    )
}

export default PCheckbox