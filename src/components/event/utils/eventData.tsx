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

export const eventStatusOptions = [
    {
        value: true,
        label: 'Open',
    },
    {
        value: false,
        label: 'Close',
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
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
        fullDesc: `Combine the power of Data Science, Machine Learning and Deep Learning to create powerful AI for Real-World applications! Learn key AI concepts and intuition training to get you quickly up to speed with all things AI.

        We’re fully committed to making this the most accessible and results-driven AI course on the planet. This requires us to be there when you need our help. That’s why we’ve put together a team of professional Data Scientists to support you in your journey, meaning you’ll get a response from us within 48 hours maximum.`,
        mobile: '+1 234 4567 5678',
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107 United States',
    },
]

export const speakersData = [
    {
        imgSrc: '/user!.jpg',
        isBorderBottom: true,
        name: 'Victor James',
        spec: 'Working In Google',
        position: 'Event Manager',
    },
    {
        imgSrc: '/user2.jpg',
        isBorderBottom: true,
        name: 'Victor James',
        spec: 'Working In Google',
        position: 'Event Manager',
    },
    {
        imgSrc: '/user3.jpg',
        isBorderBottom: true,
        name: 'Victor James',
        spec: 'Working In Google',
        position: 'Event Co-ordinator',
    },
    {
        imgSrc: '/user!.jpg',
        name: 'Victor James',
        spec: 'Working In Google',
        position: 'Software Engineer',
    },
];

export const coveredArray = [
    "Complete beginner to expert AI skill",
    "Using ChatGPT for coding",
    "Real world solution",
    "How to optimize your AI",
    "How to start building AI",
    "How to merge AI with OpenAI Gym",
    "How to optimize your AI",
    "Real world solution"
];
