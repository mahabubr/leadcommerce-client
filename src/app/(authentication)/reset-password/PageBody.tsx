'use client'
import { Button, Form, Input } from "antd";
import Link from "next/link";


const PageBody = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <label className="font-medium">Email Address</label>
            <Form.Item
                className=""
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Please input your valid email address!",
                    },
                ]}
            >
                <Input className="" />
            </Form.Item>

            <div className="">
                <Link href="/login" className="">
                    Login
                </Link>
            </div>

            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default PageBody;