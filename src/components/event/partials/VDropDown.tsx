import { Dropdown, Menu } from 'antd';
import React from 'react';
import { eventDropdownItems } from '../utils/eventData';
import { MoreOutlined } from '@ant-design/icons';

type Props = {
    placement?: "bottomLeft" | "topLeft" | "topCenter" | "topRight" | "bottomCenter" | "bottomRight" | "top" | "bottom" | undefined;
};

const menu = (
    <Menu>
        {eventDropdownItems?.length &&
            eventDropdownItems.map((item: any) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
    </Menu>
);

const VDropDown = ({ placement }: Props) => {
    return (
        <Dropdown overlay={menu} placement={placement ? placement : "bottomLeft"}>
            <MoreOutlined style={{
                fontSize: '22px',
                cursor: 'pointer',
                color: '#a09fb0'
            }} />
        </Dropdown>
    );
};

export default VDropDown;
