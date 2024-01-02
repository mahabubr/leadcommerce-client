import React, { useEffect } from "react";
import { Button, Checkbox, DatePicker, Form, Input } from "antd";
import style from "./static/profileUpload.module.css";
import { useGetAEmployeQuery } from "@/redux/employees/employeesApi";
type FieldType = {
  fullName?: string;
  country?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthday?: Date;
};

type resType = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  birthday: "",
};

const ProfileUpdateFrom = () => {
  const { data, isLoading }: any = useGetAEmployeQuery({});
  console.log(data);

  const [form] = Form.useForm();

  // useEffect(()=>{
  //   if(data?.statusCode === 200)
  // })

  useEffect(() => {});

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {/* {isLoading?"loader..." : (<form........ )} */}
      {isLoading ? (
        "loader"
      ) : (
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
              label="Full Name"
              name="fullName"
              style={{
                width: "50%",
              }}
              rules={[{ message: "Please input your username!" }]}
            >
              {/* {console.log(data?.data?.full_name)} */}

              <Input
                defaultValue={data?.data?.full_name}
                style={{
                  height: "40px",
                }}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Country"
              name="country"
              style={{
                width: "50%",
              }}
              rules={[{ message: "Please input your password!" }]}
            >
              <Input
                defaultValue={data?.data?.country}
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
            }}
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              style={{
                width: "100%",
              }}
              rules={[{ message: "Please input your username!" }]}
            >
              <Input
                defaultValue={data?.data?.email}
                style={{
                  height: "40px",
                }}
              />
            </Form.Item>

            <Form.Item<FieldType>
              label="Phone"
              style={{
                width: "100%",
              }}
              name="country"
              rules={[{ message: "Please input your password!" }]}
            >
              <Input
                defaultValue={data?.data?.phone}
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
              Update
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default ProfileUpdateFrom;
