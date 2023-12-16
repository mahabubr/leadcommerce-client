'use client'

import React, { useState } from 'react'
import { Button, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { ENUM_PRODUCT_STATUS } from '@/config/constants/product';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProductDataType, productData } from './utils/productData';
import { useRouter } from 'next/navigation'
const { Text } = Typography;

const ViewProducts = () => {

    // global
    const router = useRouter();

    // states
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);


    // data columns
    const columns: ColumnsType<ProductDataType> = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (_, { image, title }) => <Image src={image} alt={title} width={60} height={60} />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (_, { price }) => <>৳ {price} </>,
        },
        {
            title: 'In Stock',
            key: 'inStock',
            dataIndex: 'inStock',
            render: (_, { inStock }) => (
                <Text
                    className={inStock ? 'bg-success' : 'bg-error'}
                    style={{
                        textAlign: 'center',
                        padding: '4px 15px',
                        borderRadius: '25px',
                        color: 'white'
                    }}
                >
                    {inStock ? 'In Stock' : 'Out of Stock'}
                </Text>
            ),
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (_, { status }) => (
                <Text
                    className={status === ENUM_PRODUCT_STATUS.PENDING ? 'bg-warning' : status === ENUM_PRODUCT_STATUS.ACTIVE ? 'bg-success' : 'bg-error'}
                    style={{
                        textAlign: 'center',
                        padding: '4px 15px',
                        borderRadius: '25px',
                        color: status === ENUM_PRODUCT_STATUS.PENDING ? 'black' : 'white',
                        textTransform: 'capitalize'
                    }}
                >
                    {status}
                </Text>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, { _id }) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => handleRouteUpdate(_id)}
                    >
                        Edit
                    </Button>
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={handleDeleteProduct}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // product select
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => setSelectedRowKeys(newSelectedRowKeys);

    // routing action
    const handleRouteUpdate = (_id: string) => router.push(`/products/update/${_id}`)

    // delete action
    const handleDeleteProduct = () => {

    }

    return (
        <>
            <Table
                columns={columns}
                dataSource={productData}
                rowKey="_id"
                rowSelection={{
                    selectedRowKeys,
                    onChange: onSelectChange,
                }}
            />
        </>
    )
}

export default ViewProducts