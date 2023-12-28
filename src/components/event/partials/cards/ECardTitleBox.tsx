import { Flex, Typography } from 'antd';
import Link from 'next/link';
import React from 'react'
const { Title, Paragraph } = Typography;

type Props = {
    organizedBy: string;
    _id: string;
    title: string;
    status: boolean;
}

const ECardTitleBox = ({ organizedBy, title, status, _id }: Props) => {
    return (
        <Flex vertical>
            <Link href={`/event/${_id}`}>
                <Title style={{ color: '#2b2a3f', fontSize: '18px', marginBottom: '5px' }} level={5}>{title}</Title>
            </Link>

            <Flex gap='middle' align='center'>
                <Paragraph
                    style={{
                        margin: 0,
                        color: '#8e8da1',
                    }}
                >
                    Organized by &nbsp;
                    <span
                        style={{
                            color: '#2c3e50'
                        }}
                    >
                        {organizedBy}
                    </span>
                </Paragraph>

                <div style={{
                    fontSize: '12px',
                    padding: '7px 10px',
                    fontWeight: 600,
                    borderRadius: '2px',
                    backgroundColor: '#f3ebeb',
                    color: status ? '#06b48a' : '#ef2929'
                }}>
                    {status ? 'Open' : 'Closed'}
                </div>
            </Flex>

        </Flex>
    )
}

export default ECardTitleBox