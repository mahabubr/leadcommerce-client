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
            className=""
            name="basic"
            initialValues={{
                remember: true,
            }}
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
                        type: "email",
                        message: "Your email address",
                    },
                    {
                        required: true,
                        message: "The input is not valid E-mail!",
                    },
                ]}
            >
                <Input className="" />
            </Form.Item>

            <div className="pt-2">
                <label className="font-medium">Password</label>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
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
                <Button type="primary" htmlType="submit">Log in</Button>
            </Form.Item>
        </Form>
    );
};

export default PageBody;