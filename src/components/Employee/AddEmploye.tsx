'use client'
import React, { useEffect, useMemo, useState } from 'react'
// import PCBreadcrumb from './partials/PCBreadcrumb'
import { Card, Row, Col, Button, Upload, UploadProps, message, UploadFile, Space, Form, Input, Select, ColorPicker, Checkbox, InputNumber } from 'antd'
import Image from 'next/image'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import type { Color, ColorPickerProps } from 'antd/es/color-picker';
import { notification } from "antd";
import { PoweroffOutlined } from '@ant-design/icons';
import PCBreadcrumb from '../products/partials/PCBreadcrumb'

const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
        authorization: 'authorization-text',
    },
};

type resType = { statusCode: number, success: boolean, message: string, data: any }

const initialData = {
    title: "",
    product_category: "",
    slug: "",
    description: "",
    fullDescription: "",
    quantity: "",
    price: "",
    tags: '',
};

const AddEmploye = () => {
    const [colorHex, setColorHex] = useState<Color | string>('#1677ff');
    const [formatHex, setFormatHex] = useState<ColorPickerProps['format']>('hex');
    const [checkedValues, setCheckedValues] = useState<string[]>(['S']);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [api, contextHolder] = notification.useNotification();
    const [isLoading, setIsLoading] = useState(false)


    /* //** form  */
    const [form] = Form.useForm();

    // states
    const [fileList, setFileList] = useState<UploadFile | any>()

    const hexString = useMemo(
        () => (typeof colorHex === 'string' ? colorHex : colorHex.toHexString()),
        [colorHex],
    );

    //** handle onfinish  */
    const onFinish = async (values: any) => {
        console.log(values, checkedValues, hexString);


        let formData = new FormData();
        if (values.title) {
            formData.append("productName", values.title);
        }
        if (values.product_category) {
            formData.append("categories", values.product_category);
        }
        if (values.slug) {
            formData.append("slug", values.slug);
        }
        if (values.description) {
            formData.append("description", values.description);
        }
        if (checkedValues.length > 0) {
            checkedValues.forEach((value, index) => {
                formData.append(`size[${index}]`, value);
            });
        }
        if (values.fullDescription) {
            formData.append("fullDescription", values.fullDescription);
        }
        if (hexString) {
            formData.append("color", hexString);
        }
        if (values.quantity) {
            formData.append("quantity", values.quantity);
        }
        if (values.price) {
            formData.append("price", values.price);
        }
        if (values.tags) {
            formData.append("productTags", values.tags);
        }
        if (fileList) {
            formData.append("image", fileList.originFileObj);
        }

        /* //** calling api */
        /* //** handle product create response */
        try {
            setIsLoading(true)
           
        } catch (error) {
            setIsLoading(false)
            message.error("Not able to update");
        }

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
        // console.log(fileList)
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
            {contextHolder}
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
                                        height: '50%',
                                        borderRadius: '15px',
                                    }}
                                />


                                <div style={{ position: 'absolute', top: '40px', left: '37px', }}>
                                    <Upload
                                        accept=".png, .jpg, .jpeg"
                                        maxCount={1}
                                        showUploadList={false}
                                        beforeUpload={(file) => {
                                            return new Promise((resolve, reject) => {
                                                if (file.size > 2000000) {
                                                    reject("File size must be under 2MB");
                                                } else {
                                                    resolve("success");
                                                }
                                            });
                                        }}
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
                                <div style={{ position: 'absolute', top: '40px', right: '37px', }}>
                                    <Button icon={<DeleteOutlined />} onClick={() => { setFileList(null); setCurrentImage(null) }} size='large'></Button>
                                </div>
                            </Card>
                        </Col>

                        <Col className="gutter-row" span={15}>
                            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>

                                <Col className="gutter-row" span={12}>
                                    <label
                                        htmlFor='full_name'
                                        style={{
                                            textTransform: 'uppercase',
                                            fontWeight: 500,
                                        }}
                                    >
                                        Full Name
                                    </label>
                                    <Form.Item
                                        name="full_name"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please enter full name",
                                            },
                                            { whitespace: true },
                                        ]}
                                        hasFeedback
                                    >
                                        <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Type Full Name" />
                                    </Form.Item>
                                </Col>

                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <label
                                            htmlFor='position'
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Position
                                        </label>
                                        <Form.Item
                                            name="position"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Position is required",
                                                },
                                                { whitespace: true },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Enter position" />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <label
                                            htmlFor='email'
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Email
                                        </label>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "email is required",
                                                },
                                                { whitespace: true },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Enter email" />
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <label
                                            htmlFor='phone'
                                            style={{
                                                textTransform: 'uppercase',
                                                fontWeight: 500,
                                            }}
                                        >
                                            Phone
                                        </label>
                                        <Form.Item
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "phone is required",
                                                },
                                                { whitespace: true },
                                            ]}
                                            hasFeedback
                                        >
                                            <Input size="large" style={{ marginTop: '0.5rem' }} placeholder="Enter phone" />
                                        </Form.Item>
                                    </div>
                                </Col>

                            </Row>
                            <Button type="primary" htmlType="submit"
                                loading={isLoading}
                                size="large">Add Employee</Button>
                        </Col>

                    </Row>
                </Form >
            </Card >
        </>
    )
}

export default AddEmploye