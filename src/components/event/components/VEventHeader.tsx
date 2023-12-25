import { Button, Flex } from 'antd'
import React from 'react'
import VSearchBox from '../partials/VSearchBox'
import { PlusOutlined } from '@ant-design/icons'
import VFilterSelect from '../partials/VFilterSelect'
import VDropDown from '../partials/VDropDown'

type Props = {}

const VEventHeader = (props: Props) => {

    const handleChange = (value: string | string[]) => {
        console.log(`Selected: ${value}`);
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
                    handleChange={handleChange}
                />

                <VDropDown />
            </Flex>
        </Flex>
    )
}

export default VEventHeader