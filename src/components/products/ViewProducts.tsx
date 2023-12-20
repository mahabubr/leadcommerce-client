'use client'

import React, { useState } from 'react'
import { Button, Card, Col, Collapse, Flex, Spin, Row, Select, Space, Table, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { ENUM_PRODUCT_STATUS } from '@/config/constants/product';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ProductDataType, productData, productItemSort, productItemSortPage } from './utils/productData';
import { useRouter } from 'next/navigation'
import PVBreadcrumb from './partials/PVBreadcrumb';
import SearchKeyword from './partials/SearchKeyword';
import CategoryFilterBox from './partials/CategoryFilterBox';
import PriceRangeFilterBox from './partials/PriceRangeFilterBox';
import { useGetAllProductsQuery } from '@/redux/product/productApi';
const { Text } = Typography;

const ViewProducts = () => {

    //** hanlding pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(4);
    const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">('asc');

    /*//** RTK calling of product data getting */
    const { data: productData, isLoading }: { data?: any, isLoading: boolean } = useGetAllProductsQuery({
        limit: currentLimit,
        page: currentPage,
        product_status: "active",
        sortOrder: currentSortOrder
    });

    /* //**Product page list size */
    const handleProductPage = (value: any) => {
        setCurrentLimit(parseInt(value))
    }

    /* //**Product page list sorting */
    const handleProductListsorting = (value: any) => {
        setCurrentSortOrder(value)
    }

    // global
    const router = useRouter();

    // states
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    // const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
    // const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

    // data columns
    const columns: ColumnsType<ProductDataType> = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (_, { image, productName }) => <Image src={image} alt={productName} width={60} height={60} />,
        },
        {
            title: 'Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (_, { price }) => <>৳ {price} </>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, { quantity }) => <>{quantity} pice </>,
        },
        {
            title: 'In Stock',
            key: 'quantity',
            dataIndex: 'quantity',
            render: (_, { quantity }) => (
                <Text
                    className={quantity! > 0 ? 'bg-success' : 'bg-error'}
                    style={{
                        textAlign: 'center',
                        padding: '4px 15px',
                        borderRadius: '25px',
                        color: 'white'
                    }}
                >
                    {quantity! > 0 ? 'In Stock' : 'Out of Stock'}
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
    const handleDeleteProduct = () => { }

    return (
        <>
            <PVBreadcrumb />

            <div style={{ marginTop: '20px' }}>

                {/* <SearchFilterBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                /> */}


                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col className="gutter-row" span={18}>
                        <Card bordered>

                            <Flex align="center" style={{ marginBottom: '25px', gap: '20px' }}>
                                <p>All Products</p>

                                {/* //**Product page list sorting */}
                                <Select
                                    size="large"
                                    placeholder="Sort"
                                    onChange={handleProductListsorting}
                                    style={{ width: '100px', textTransform: 'capitalize' }}
                                    options={productItemSort}
                                    defaultValue={productItemSort[0]}
                                />
                                {/* //**product page list size */}
                                <Select
                                    size="large"
                                    onChange={handleProductPage}
                                    style={{ width: '100px', textTransform: 'capitalize' }}
                                    options={productItemSortPage}
                                    defaultValue={productItemSortPage[0]}
                                />
                            </Flex>

                            {/* //**product table */}
                            <Table
                                columns={columns}
                                dataSource={productData?.data}
                                rowKey="_id"
                                pagination={{
                                    current: currentPage,
                                    pageSize: currentLimit,
                                    total: productData?.meta?.total,
                                    onChange: (page, pageSize) => {
                                        setCurrentPage(page);
                                        setCurrentLimit(pageSize);
                                    },
                                }}
                                rowSelection={{
                                    selectedRowKeys,
                                    onChange: onSelectChange,
                                }}
                                loading={isLoading && { indicator: <Spin /> }}
                            />
                        </Card>
                    </Col>


                    <Col className="gutter-row" span={6}>
                        <Space direction="vertical" size={24} style={{ width: '100%' }}>

                            <Collapse
                                collapsible="header"
                                defaultActiveKey={['1']}
                                expandIconPosition="right"
                                style={{ backgroundColor: 'white', border: '1px solid #f0f0f0' }}
                                bordered={false}
                                items={[
                                    {
                                        key: '1',
                                        label: <div style={{ fontWeight: '500' }}>Keywords</div>,
                                        children: <SearchKeyword />
                                    },
                                ]}
                            />

                            <Collapse
                                collapsible="header"
                                defaultActiveKey={['2']}
                                expandIconPosition="right"
                                style={{ backgroundColor: 'white', border: '1px solid #f0f0f0' }}
                                bordered={false}
                                items={[
                                    {
                                        key: '2',
                                        label: <div style={{ fontWeight: '500' }}>Categories</div>,
                                        children: <CategoryFilterBox />
                                    },
                                ]}
                            />

                            <Collapse
                                collapsible="header"
                                defaultActiveKey={['3']}
                                expandIconPosition="right"
                                style={{ backgroundColor: 'white', border: '1px solid #f0f0f0' }}
                                bordered={false}
                                items={[
                                    {
                                        key: '3',
                                        label: <div style={{ fontWeight: '500' }}>Price</div>,
                                        children: <PriceRangeFilterBox />
                                    },
                                ]}
                            />

                        </Space>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ViewProducts