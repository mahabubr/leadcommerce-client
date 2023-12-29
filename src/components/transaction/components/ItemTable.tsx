import { Col, Flex, Row, Table, Typography } from 'antd';
import Image from 'next/image';
import React from 'react'
import { transactionItemData } from '../utils/transactionData';
import { ColumnsType } from 'antd/es/table';
import TransactionSummary from '../partials/TransactionSummary';

const { Title, Paragraph } = Typography

type Props = {
    items: any;
}

const ItemTable = ({ items }: Props) => {

    // data columns
    const columns: ColumnsType<any> = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_, { image, productName }) => (
                <Flex align='center' style={{ gap: '10px' }}>
                    <Image
                        src={image.avatar}
                        alt=''
                        width={40}
                        height={40}
                    />

                    {productName}
                </Flex>

            ),
        },
        {
            title: "Unit Price",
            dataIndex: "price",
            key: "price",
            render: (_, { price }) => <>৳ {price} </>,
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (_, { quantity }) => <>{quantity} </>,
        },
        {
            title: "Total",
            dataIndex: "price",
            key: "price",
            render: (_, { price, quantity }) => <>৳ {price * quantity} </>,
        },
    ];

    // Calculate total cost
    const subTotal = items.reduce((accumulator: any, item: any) => {
        const itemTotal = item.price * item.quantity;
        return accumulator + itemTotal;
    }, 0);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={items}
                // rowKey="_id"
                scroll={{ x: true }}
                pagination={false}
            />

            <Row gutter={{ xs: 8, sm: 16, md: 24 }} justify="end" style={{ margin: '30px 0' }}>
                <Col className="gutter-row" span={8}>

                    <TransactionSummary
                        childOne='Subtotal:'
                        childTwo={`৳ ${subTotal}`}
                    />

                    <TransactionSummary
                        childOne='Shipping cost:'
                        childTwo={`৳ 10`}
                        css={{ margin: '5px 0' }}
                    />


                    <TransactionSummary
                        childOne='Grand Total'
                        childTwo={`৳ ${subTotal + 10}`}
                        childTwoStyle={{
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            lineHeight: 1.2,
                        }}
                    />

                </Col>
            </Row>

            <div>
                <Title level={5}>Transaction Note</Title>

                <Paragraph style={{ color: '#adb5bd' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, veritatis at. Dolore facilis repellat numquam cum, id, iste sint libero odio atque a quam ducimus cumque quis enim reiciendis repellendus?</Paragraph>
            </div>
        </div>
    )
}

export default ItemTable