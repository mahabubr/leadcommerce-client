"use client";
import { Card, Row, Col, Button, Upload, Form, Input } from "antd";
import Image from "next/image";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import PCBreadcrumb from "../products/partials/PCBreadcrumb";
import { paths } from "@/paths/paths";
import useAddEmploye from "./AddEmploye.logic";
import { uploadProps } from "@/Helper/utils";

type resType = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};

const initialData = {
  title: "",
  product_category: "",
  slug: "",
  description: "",
  fullDescription: "",
  quantity: "",
  price: "",
  tags: "",
};

const AddEmploye = () => {
  const {
    handleCheckboxChange,
    onFinish,
    fileList,
    form,
    isLoading,
    api,
    currentImage,
    checkedValues,
    contextHolder,
    setCurrentImage,
    setFileList,
    beforeFileUpload,
    onChangeFileHandle,
  } = useAddEmploye();

  return (
    <>
      {contextHolder}
      <div>
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
              <Card
                title=""
                bordered
                style={{ maxHeight: "800px", position: "relative" }}
              >
                <Image
                  src={currentImage ? currentImage : "/preview.jpg"}
                  height={500}
                  width={630}
                  alt="preview"
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: "15px",
                  }}
                />

                <div
                  style={{ position: "absolute", top: "40px", left: "37px" }}
                >
                  <Upload
                    accept=".png, .jpg, .jpeg"
                    maxCount={1}
                    showUploadList={false}
                    beforeUpload={beforeFileUpload}
                    onChange={onChangeFileHandle}
                    {...uploadProps}
                  >
                    <Button icon={<UploadOutlined />} size="large"></Button>
                  </Upload>
                </div>
                <div
                  style={{ position: "absolute", top: "40px", right: "37px" }}
                >
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileList(null);
                      setCurrentImage(null);
                    }}
                    size="large"
                  ></Button>
                </div>
              </Card>
            </Col>

            <Col className="gutter-row" span={15}>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col className="gutter-row" span={12}>
                  <label
                    htmlFor="full_name"
                    style={{
                      textTransform: "uppercase",
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
                    <Input
                      size="large"
                      style={{ marginTop: "0.5rem" }}
                      placeholder="Type Full Name"
                    />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" span={12}>
                  <div>
                    <label
                      htmlFor="position"
                      style={{
                        textTransform: "uppercase",
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
                      <Input
                        size="large"
                        style={{ marginTop: "0.5rem" }}
                        placeholder="Enter position"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        textTransform: "uppercase",
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
                      <Input
                        size="large"
                        style={{ marginTop: "0.5rem" }}
                        placeholder="Enter email"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div>
                    <label
                      htmlFor="phone"
                      style={{
                        textTransform: "uppercase",
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
                      <Input
                        size="large"
                        style={{ marginTop: "0.5rem" }}
                        placeholder="Enter phone"
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div>
                    <label
                      htmlFor="password"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Password
                    </label>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "phone is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback
                    >
                      <Input
                        size="large"
                        style={{ marginTop: "0.5rem" }}
                        type="password"
                        placeholder="Enter password"
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                size="large"
              >
                Add Employee
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default AddEmploye;
