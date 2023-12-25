import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    _id: string;
    image: string;
    title: string;
}

const ECardImageBox = ({ _id, image, title }: Props) => {
    return (
        <Link href={`/event/${_id}`} style={{ marginBottom: '0.5px' }}>
            <Image
                src={image}
                width={300}
                height={220}
                alt={title}
                className=''
                style={{
                    borderRadius: 0,
                    width: '100%',
                    height: '220px'
                }}
            />
        </Link>
    )
}

export default ECardImageBox