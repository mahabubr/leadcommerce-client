'use client'
import { Button, Form, Input } from "antd";
import Link from "next/link";
import style from "../style/authentication.module.css";


const PageBody = () => {
    const [form] = Form.useForm();
    const onFinish = (values: any) => {
        console.log(values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className={style.main_container} >
            <div className={style.form_container}>
                <div className={style.form_container_title}>
                    <h2>Log In</h2>
                    <p>Log in to your account to continue.</p>
                </div>
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
                    <div>
                        <label style={{ fontSize: "15px" }} >Email Address</label>
                        <Form.Item
                            name="email"
                            style={{ marginBottom: "16px" }}
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
                            <Input style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                        </Form.Item>
                    </div>

                    <div style={{ marginTop: "4px" }} >
                        <label style={{ fontSize: "15px" }} >Password</label>
                        <Form.Item
                            style={{ marginBottom: "4px" }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password style={{ marginTop: "1px", width: "300px", height: "40px", borderRadius: "2px" }} />
                        </Form.Item>
                    </div>

                    <div style={{ width: "100%", margin: "10px 0px", textAlign: "right" }}>
                        <Link href="/reset-password" className="">
                            Forget your password?
                        </Link>
                        <div>
                            create a new account?&nbsp;
                            <Link href="/register" className="">
                                login
                            </Link>
                        </div>
                    </div>

                    <div style={{ width: "100%", textAlign: "center", }}>
                        <Form.Item>
                            <Button style={{
                                width: "100%",
                                borderRadius: "2px",
                                textAlign: "center",
                                margin: "auto",
                                fontSize: 14,
                                fontWeight: "500",
                                height: "40px",
                                boxShadow: "2px 2px 8px 3px rgba(0, 0, 0, 0.2)"
                            }} type="primary" htmlType="submit">Log in</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default PageBody;