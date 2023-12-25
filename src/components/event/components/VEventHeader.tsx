import { Button, Flex } from 'antd'
import React, { useState } from 'react'
import VSearchBox from '../partials/VSearchBox'
import { PlusOutlined } from '@ant-design/icons'
import VFilterSelect from '../partials/VFilterSelect'
import VDropDown from '../partials/VDropDown'
import { eventDropdownOptions } from '../utils/eventData'

type Props = {}

const VEventHeader = (props: Props) => {

    const [selected, setSelected] = useState<any>(eventDropdownOptions[0].value);

    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
        setSelected(value);
    };

    return (
        <Flex justify='space-between' align='center' style={{ marginBottom: '25px', backgroundColor: 'white', padding: '15px 30px' }}>

            <VSearchBox />

            <Flex gap='middle'>

                <Button
                    type="primary"
                    size="large"
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    Add New Event
                    <PlusOutlined style={{ marginLeft: 8, color: 'white' }} />
                </Button>


                <VFilterSelect
                    selected={selected}
                    handleChange={handleChange}
                />

                <VDropDown />
            </Flex>
        </Flex>
    )
}

export default VEventHeader