import { Card, Typography } from 'antd'
import React from 'react'
import SpeakerCard from '../../partials/eDetails/SpeakerCard';
import { speakersData } from '../../utils/eventData';

const { Title } = Typography;

type Props = {}

const Speakers = (props: Props) => {
    return (
        <Card
            style={{ padding: '10px', borderRadius: 0, marginBottom: '30px' }}
        >
            <Title level={5} style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, }}>Speakers</Title>

            {speakersData.map((speaker, index) => (
                <SpeakerCard
                    key={index}
                    imgSrc={speaker.imgSrc}
                    isBorderBottom={speaker.isBorderBottom}
                    name={speaker.name}
                    spec={speaker.spec}
                    position={speaker.position}
                />
            ))}

        </Card>
    )
}

export default Speakers