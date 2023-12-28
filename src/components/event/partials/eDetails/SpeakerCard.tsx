import { Flex, Typography } from 'antd';
import Image from 'next/image';
import React from 'react'
const { Paragraph } = Typography;

type Props = {
    imgSrc: string;
    name: string;
    spec: string;
    position: string;
    isBorderBottom?: boolean;
}

const SpeakerCard = ({ imgSrc, isBorderBottom, name, spec, position }: Props) => {
    return (
        <Flex align='center' justify='space-between' style={{ borderBottom: isBorderBottom ? '1px solid #f4f3f7' : 'none', padding: '10px 0' }}>
            <Flex align='center' gap='middle'>
                <Image src={imgSrc} width={60} height={50} alt=''
                    style={{ border: '2px solid white', filter: 'drop-shadow(0 4px 4px rgba(101,96,240,.1))', borderRadius: '50%' }}
                />

                <div>
                    <Paragraph style={{
                        marginBottom: '0.25rem',
                        color: '#2b2a3f',
                        fontSize: '16px',
                        fontWeight: 500
                    }}>
                        {name}
                    </Paragraph>
                    <Paragraph style={{
                        marginBottom: '0.25rem',
                        color: '#8e8da1',
                        fontSize: '14px',
                        fontWeight: 600
                    }}>
                        {spec}
                    </Paragraph>
                </div>
            </Flex>

            <div style={{
                padding: '7px 10px',
                fontSize: 12,
                fontWeight: 600,
                borderRadius: '2px',
                letterSpacing: '.01em',
                backgroundColor: '#f4f3f7',
                color: '#6560f0',
            }}>
                {position}
            </div>
        </Flex>
    )
}

export default SpeakerCard