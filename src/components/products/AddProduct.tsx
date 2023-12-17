'use client'
import React, { useState } from 'react'
import PCBreadcrumb from './partials/PCBreadcrumb'
import { Card, Row, Col, Input, Select, Button, Upload, UploadProps, message, UploadFile } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { productItemStatus, productItems } from './utils/productData'
import Image from 'next/image'
import { UploadOutlined } from '@ant-design/icons'

const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
};


const AddProduct = () => {

    // states
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
    const [selectedStatus, setSelectedStatus] = useState<string | undefined>(undefined);
    const [fileList, setFileList] = useState<UploadFile | any>()

    // handler
    const handleChange = (value: string) => setSelectedCategory(value);
    const handleStatusChange = (value: string) => setSelectedStatus(value);

    return (
        <>
            <PCBreadcrumb title='Create Product' />

            <Card title="Add Product" bordered style={{ marginTop: '20px' }}>

                <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                    <Col className="gutter-row" span={9}>
                        <Card title="" bordered style={{ height: '100%', position: 'relative' }}>

                            {/* {fileList && fileList.length > 0 && fileList[0].status === 'done' && (
                                <Image src={fileList[0].originFileObj} alt={fileList[0].name} width={200} height={200} />
                            )} */}

                            <Image
                                src='/preview.jpg'
                                height={500}
                                width={630}
                                alt='preview'
                                style={{
                                    borderRadius: '15px',

                                }} />

                            <div style={{ position: 'absolute', top: '40px', right: '37px' }}>
                                <Upload
                                    onChange={(info) => {
                                        if (info.file.status !== 'uploading') {
                                            console.log(info.file, info.fileList);
                                        }
                                        if (info.file.status === 'done') {
                                            message.success(`${info.file.name} file uploaded successfully`);
                                            setFileList(info.file);
                                        } else if (info.file.status === 'error') {
                                            message.error(`${info.file.name} file upload failed.`);
                                        }
                                    }}
                                    {...props}
                                >
                                    <Button icon={<UploadOutlined />} size='large'></Button>
                                </Upload>
                            </div>
                        </Card>
                    </Col>

                    <Col className="gutter-row" span={15}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                            <Col className="gutter-row" span={12}>
                                <Input placeholder="Product Title" size="large" />
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <Input placeholder="Product Price" size="large" />
                            </Col>

                            <Col className="gutter-row" span={24} style={{ margin: '20px 0' }}>
                                <TextArea rows={4} placeholder="Product description here" maxLength={6} />
                            </Col>

                            <Col className="gutter-row" span={24} style={{ marginBottom: '20px' }}>
                                <Input placeholder="Product Quantity" size="large" />
                            </Col>

                            <Col className="gutter-row" span={12} >
                                <Select
                                    size="large"
                                    placeholder="Select a category"
                                    onChange={handleChange}
                                    style={{ width: '100%' }}
                                    options={productItems}
                                    defaultValue={selectedCategory}
                                />
                            </Col>

                            <Col className="gutter-row" span={12}>
                                <Select
                                    size="large"
                                    placeholder="Status"
                                    onChange={handleStatusChange}
                                    style={{ width: '100%', textTransform: 'capitalize' }}
                                    options={productItemStatus}
                                    defaultValue={selectedStatus}
                                    dropdownRender={(menu) => (
                                        <div>
                                            {menu}
                                            <style>
                                                {`
                              .ant-select-item-option{
                                text-transform: capitalize;
                              }
                            `}
                                            </style>
                                        </div>
                                    )}
                                />
                            </Col>
                        </Row>

                        <Button type="primary" style={{ marginTop: '20px' }} size="large">Add Product</Button>
                    </Col>

                </Row>
            </Card>
        </>
    )
}

export default AddProduct