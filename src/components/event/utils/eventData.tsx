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

export const events = [
    {
        _id: 1,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 2,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: true,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 3,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 4,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 5,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: true,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 6,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 7,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 8,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 9,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 10,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 11,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 12,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 13,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: false,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
    {
        _id: 14,
        image: '/event.jpg',
        date: '31 Mar 2023',
        title: 'UI/UX Design Sprint 2023',
        organizedBy: 'EnvyTheme',
        status: true,
        desc: 'This event combines all the data and backend information to the frontend. Organized by EnvyTheme.',
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
]