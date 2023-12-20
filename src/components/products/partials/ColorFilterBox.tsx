import React from 'react'
import PCheckbox from './PCheckbox'

type Props = {}

const getRandomColor = () => {
    // Generate a random color in hex format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
};

const ColorFilterBox = (props: Props) => {

    const randomColor = getRandomColor();

    return (
        <div>
            <input type="checkbox" name="" id="" style={{ backgroundColor: randomColor, width: '18px', height: '18px' }} />
        </div>
    )
}

export default ColorFilterBox