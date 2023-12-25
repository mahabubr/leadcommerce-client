import { Dropdown, Menu } from 'antd';
import React from 'react';
import { eventDropdownItems } from '../utils/eventData';
import { MoreOutlined } from '@ant-design/icons';

type Props = {};

const menu = (
    <Menu>
        {eventDropdownItems?.length &&
            eventDropdownItems.map((item: any) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
    </Menu>
);

const VDropDown = (props: Props) => {
    return (
        <Dropdown overlay={menu} placement="bottomLeft">
            <MoreOutlined style={{
                fontSize: '24px',
                cursor: 'pointer'
            }} />
        </Dropdown>
    );
};

export default VDropDown;
