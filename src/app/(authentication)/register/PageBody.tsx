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
            <label className=" font-medium">Full Name</label>
            <Form.Item
                className=""
                name="fullName"
                rules={[
                    {
                        required: true,
                        message: "Please input your Full Name!",
                    },
                ]}
            >
                <Input className="" />
            </Form.Item>
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
            <label className=" font-medium">Password</label>
            <Form.Item
                className=""
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                ]}
            >
                <Input.Password className="" />
            </Form.Item>

            <div>
                <label className="">Confirm Password</label>
                <Form.Item
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Confirm Password!",
                        },
                    ]}
                >
                    <Input.Password className="" />
                </Form.Item>
            </div>

            <div className="">
                <Link href="/reset-password" className="">
                    Forget your password
                </Link>
            </div>

            <Form.Item>
                <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>
        </Form>
    );
};

export default PageBody;