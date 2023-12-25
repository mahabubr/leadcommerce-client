import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Flex, MenuProps } from "antd";
import Link from "next/link";

export const ENUM_FILTER_OPTIONS = {
    ALL: 'all',
    OPEN: 'open',
    CLOSED: 'closed',
}


export const eventDropdownOptions = [
    {
        value: ENUM_FILTER_OPTIONS.ALL,
        label: ENUM_FILTER_OPTIONS.ALL,
    },
    {
        value: ENUM_FILTER_OPTIONS.OPEN,
        label: ENUM_FILTER_OPTIONS.OPEN,
    },
    {
        value: ENUM_FILTER_OPTIONS.CLOSED,
        label: ENUM_FILTER_OPTIONS.CLOSED,
    },
];

export const eventDropdownItems: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href='/evnt'>
                <Flex gap='middle'>
                    <EyeOutlined />
                    View
                </Flex>
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href='/evnt'>
                <Flex gap='middle'>
                    <EditOutlined />
                    Edit
                </Flex>
            </Link>
        ),
    },
    {
        key: '3',
        label: (
            <Link href='/evnt'>
                <Flex gap='middle'>
                    <DeleteOutlined />
                    Delete
                </Flex>
            </Link>
        ),
    },
];