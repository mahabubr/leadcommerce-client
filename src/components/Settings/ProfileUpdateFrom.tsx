import React from "react";
import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import style from "./static/profileUpload.module.css";
type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthday?: Date;
};

const ProfileUpdateFrom = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        layout="vertical"
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Form.Item<FieldType>
            label='First Name'
            name='firstName'
            style={{
              width: "50%",
            }}
            rules={[{ message: "Please input your username!" }]}>
            <Input
              style={{
                height: "40px",
              }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label='Last Name'
            name='lastName'
            style={{
              width: "50%",
            }}
            rules={[{ message: "Please input your password!" }]}>
            <Input
              style={{
                height: "40px",
              }}
            />
          </Form.Item>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}>
          <Form.Item<FieldType>
            label='Email'
            name='email'
            style={{
              width: "100%",
            }}
            rules={[{ message: "Please input your username!" }]}>
            <Input
              style={{
                height: "40px",
              }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label='Phone'
            style={{
              width: "100%",
            }}
            name='lastName'
            rules={[{ message: "Please input your password!" }]}>
            <Input
              style={{
                height: "40px",
              }}
            />
          </Form.Item>
        </div>
        <Form.Item<FieldType>
          label="Address"
          style={{
            width: "100%",
          }}
          name="address"
          rules={[{ message: "Please input your password!" }]}
        >
          <Input
            style={{
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item label="Birth Day" name="birthday">
          <DatePicker
            style={{
              height: "40px",
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileUpdateFrom;
