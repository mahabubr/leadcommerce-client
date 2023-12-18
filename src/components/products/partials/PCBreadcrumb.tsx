import React from 'react'
import { Button, Flex, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const boxStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: 6,
    border: '1px solid #2c3e50',
    padding: '20px 15px'
};

type Props = {
    title: string;
}

const PCBreadcrumb = ({ title }: Props) => {

    // global
    const router = useRouter();

    return (
        <Flex gap="middle" align="start" vertical>
            <Flex style={boxStyle} justify='space-between' align='center'>

                <Title style={{ margin: 0 }} level={3}>{title}</Title>


                <Flex gap="small" wrap="wrap">
                    <Button type="primary" size="large" onClick={() => router.push('/products')}>View All</Button>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default PCBreadcrumb