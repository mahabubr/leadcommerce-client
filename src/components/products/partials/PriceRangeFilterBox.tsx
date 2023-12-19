import Slider, { SliderMarks } from 'antd/es/slider';
import React from 'react'

type Props = {}

const marks: SliderMarks = {
    0: '0',
    50: '50',
    80: '80',
    100: {
        style: {
            color: '#2c3e50',
        },
        label: <strong>100</strong>,
    },
};

const PriceRangeFilterBox = (props: Props) => {
    return (
        <div>
            <Slider marks={marks} included={false} defaultValue={37} />
        </div>
    )
}

export default PriceRangeFilterBox