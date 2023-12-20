'use client'
import React, { useEffect, useState } from 'react'
import PCBreadcrumb from './partials/PCBreadcrumb'
import { Card, Row, Col, Button, Upload, UploadProps, message, UploadFile, Space, Form, Input, Select, ColorPicker, Checkbox, InputNumber } from 'antd'
import { productItems } from './utils/productData'
import Image from 'next/image'
import { UploadOutlined } from '@ant-design/icons'
import type { Color } from 'antd/es/color-picker';

const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
};


const AddProductV2 = () => {
    const [colorHex, setColorHex] = useState<Color | string>('#1677ff');
    const [checkedValues, setCheckedValues] = useState<string[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    /* //** form  */
    const [form] = Form.useForm();

    // states
    const [fileList, setFileList] = useState<UploadFile | any>()


    //** handle onfinish  */
    const onFinish = async (values: any) => {
        console.log(values, colorHex, checkedValues, fileList);
    }


    //** checkbox function handler 
    const handleCheckboxChange = (value: string) => {
        if (checkedValues.includes(value)) {
            setCheckedValues(checkedValues.filter((item) => item !== value));
        } else {
            setCheckedValues([...checkedValues, value]);
        }
    };

    useEffect(() => {
        console.log(fileList)
        if (fileList && fileList.originFileObj) {
            try {
                const newImage = URL.createObjectURL(fileList.originFileObj);
                console.log(newImage);
                setCurrentImage(newImage);
            } catch (error) {
                console.error("Error creating object URL:", error);
            }
        }
    }, [fileList])

    return (
        <>
            <PCBreadcrumb title='Create Product' />

            <Card title="Add Product" bordered style={{ marginTop: '20px' }}>

                <Form
                    form={form}
                    autoComplete="off"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={(error) => {
                        console.log({ error });
                    }}
                >

                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                        <Col className="gutter-row" span={9}>
                            <Card title="" bordered style={{ maxHeight: '800px', position: 'relative' }}>

                                <Image
                                    src={currentImage ? currentImage : '/preview.jpg'}
                                    height={500}
                                    width={630}
                                    alt='preview'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '15px',
                                    }}
                                />

                                <div style={{ position: 'absolute', top: '40px', left: '37px', }}>
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
                                    <label
                                        htmlFor='Product title'
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Product title
                                    </label>
                                    <Form.Item
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter Product title",
                                            },
                                            { whitespace: true },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Type Product title" />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <label
                                            htmlFor='Product Category'
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Product Category
                                        </label>

                                        <Form.Item
                                            name="product_category"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                            hasFeedback
                                        >
                                            <Select size="large" style={{ width: '100%', marginTop: '0.5rem' }}
                                                placeholder="Select a category">
                                                {productItems?.map((pt, index) => (
                                                    <Select.Option key={index} value={`${pt.value}`}>
                                                        {pt?.label}
                                                    </Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </Col>

                                <Col className="gutter-row" span={24} style={{ margin: '20px 0' }}>
                                    <div>
                                        <label
                                            htmlFor='slug'
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        >
                                            slug
                                        </label>
                                        <Form.Item
                                            name="slug"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Slug is required",
                                                },
                                                { whitespace: true },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Enter slug" />
                                        </Form.Item>
                                    </div>
                                </Col>

                                <Col className="gutter-row" span={24}>
                                    <label
                                        htmlFor='Short Description'
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Short Description
                                    </label>
                                    <Form.Item
                                        name="description"
                                        rules={[
                                            {
                                                required: false,
                                                message: "description is required",
                                            },
                                            { whitespace: true },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.TextArea
                                            style={{ marginTop: '0.5rem' }}
                                            placeholder="Product description here"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={12} style={{ margin: '20px 0' }}>
                                    <div>
                                        <label
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                                display: 'block'
                                            }}
                                        >
                                            Colors
                                        </label>

                                        <ColorPicker
                                            value={colorHex}
                                            onChange={setColorHex}
                                            allowClear
                                            format='hex'
                                        />

                                    </div>
                                </Col>

                                <Col className="gutter-row" span={12} style={{ margin: '20px 0' }}>
                                    <div>
                                        <label
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                                display: 'block',
                                            }}
                                        >
                                            Size
                                        </label>

                                        <Space style={{ marginTop: '0.5rem' }}>
                                            <Checkbox
                                                onChange={() => handleCheckboxChange('S')}
                                                checked={checkedValues.includes('S')}
                                            >
                                                S
                                            </Checkbox>
                                            <Checkbox
                                                onChange={() => handleCheckboxChange('M')}
                                                checked={checkedValues.includes('M')}
                                            >
                                                M
                                            </Checkbox>
                                            <Checkbox
                                                onChange={() => handleCheckboxChange('L')}
                                                checked={checkedValues.includes('L')}
                                            >
                                                L
                                            </Checkbox>
                                            <Checkbox
                                                onChange={() => handleCheckboxChange('XL')}
                                                checked={checkedValues.includes('XL')}
                                            >
                                                XL
                                            </Checkbox>
                                            <Checkbox
                                                onChange={() => handleCheckboxChange('XLL')}
                                                checked={checkedValues.includes('XLL')}
                                            >
                                                XLL
                                            </Checkbox>
                                        </Space>
                                    </div>
                                </Col>

                                <Col className="gutter-row" span={12}>
                                    <label
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                            display: 'block'
                                        }}
                                    >
                                        Price
                                    </label>
                                    <Form.Item
                                        name="price"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                            {
                                                type: "number",
                                                message: "Please enter product price",
                                                min: 1,
                                                max: 10000,
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <InputNumber
                                            style={{ marginTop: '0.5rem', width: '100%' }}
                                            size="large"
                                            placeholder="type price"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={12}>
                                    <label
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                            display: 'block'
                                        }}
                                    >
                                        quantity
                                    </label>
                                    <Form.Item
                                        name="quantity"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                            {
                                                type: "number",
                                                message: "Please enter product quantity",
                                                min: 1,
                                                max: 10000,
                                            },
                                        ]}
                                        hasFeedback
                                    >
                                        <InputNumber
                                            style={{ marginTop: '0.5rem', width: '100%' }}
                                            size="large"
                                            placeholder="Product Quantity"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={24} style={{ margin: '20px 0' }}>
                                    <label
                                        htmlFor='Full Description'
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Full Description
                                    </label>
                                    <Form.Item
                                        name="fullDescription"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Full Description is required",
                                            },
                                            { whitespace: true },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input.TextArea
                                            rows={6}
                                            style={{ marginTop: '0.5rem' }}
                                            placeholder="Product full description here"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={24} style={{ marginBottom: '20px' }}>
                                    <label
                                        htmlFor='Product Tags'
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Product Tags
                                    </label>
                                    <Form.Item
                                        name="tags"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter Product Tags",
                                            },
                                            { whitespace: true },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Product Tags" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit" size="large">Add Product</Button>
                        </Col>

                    </Row>
                </Form >
            </Card >
        </>
    )
}

export default AddProductV2