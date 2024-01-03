"use client";
import {
  Card,
  Row,
  Col,
  Button,
  Upload,
  Form,
  Input,
  message,
  UploadProps,
} from "antd";
import Image from "next/image";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import useCreateDelivery from "./CreateDelivery.logic";

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
};

type resType = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};

const CreateDelivery = () => {
  const {
    onFinish,
    fileList,
    form,
    isLoading,
    api,
    currentImage,
    contextHolder,
    setCurrentImage,
    setFileList,
    beforeFileUpload,
    onChangeFileHandle,
  } = useCreateDelivery();

  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "1vw",
          marginBottom: "1vw",
          borderRadius: "8px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>Create Delivery</h3>
      </div>
      {contextHolder}
      <div>
        <Form
          form={form}
          autoComplete='off'
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={(error) => {
            console.log({ error });
          }}>
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col className='gutter-row' span={9}>
              <Card
                title=''
                bordered
                style={{ maxHeight: "800px", position: "relative" }}>
                <Image
                  src={currentImage ? currentImage : "/preview.jpg"}
                  height={500}
                  width={630}
                  alt='preview'
                  style={{
                    width: "100%",
                    height: "50%",
                    borderRadius: "15px",
                  }}
                />

                <div
                  style={{ position: "absolute", top: "40px", left: "37px" }}>
                  {/* <Upload
                    accept=".png, .jpg, .jpeg"
                    maxCount={1}
                    showUploadList={false}
                    beforeUpload={beforeFileUpload}
                    onChange={onChangeFileHandle}
                    {...uploadProps}
                  >
                    <Button icon={<UploadOutlined />} size="large"></Button>
                  </Upload> */}
                  <Upload
                    accept='.png, .jpg, .jpeg'
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
                      if (info.file.status !== "uploading") {
                        console.log(info.file, info.fileList);
                      }
                      if (info.file.status === "done") {
                        message.success(
                          `${info.file.name} file uploaded successfully`
                        );
                        setFileList(info.file);
                      } else if (info.file.status === "error") {
                        message.error(`${info.file.name} file upload failed.`);
                      }
                    }}
                    {...props}>
                    <Button icon={<UploadOutlined />} size='large'></Button>
                  </Upload>
                </div>
                <div
                  style={{ position: "absolute", top: "40px", right: "37px" }}>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileList(null);
                      setCurrentImage(null);
                    }}
                    size='large'></Button>
                </div>
              </Card>
            </Col>

            <Col className='gutter-row' span={15}>
              <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                <Col className='gutter-row' span={12}>
                  <label
                    htmlFor='full_name'
                    style={{
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}>
                    Full Name
                  </label>
                  <Form.Item
                    name='full_name'
                    rules={[
                      {
                        required: true,
                        message: "Please enter full name",
                      },
                      { whitespace: true },
                    ]}
                    hasFeedback>
                    <Input
                      size='large'
                      style={{ marginTop: "0.5rem" }}
                      placeholder='Type Full Name'
                    />
                  </Form.Item>
                </Col>

                <Col className='gutter-row' span={12}>
                  <div>
                    <label
                      htmlFor='position'
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}>
                      Position
                    </label>
                    <Form.Item
                      name='position'
                      rules={[
                        {
                          required: true,
                          message: "Position is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback>
                      <Input
                        size='large'
                        style={{ marginTop: "0.5rem" }}
                        placeholder='Enter position'
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className='gutter-row' span={12}>
                  <div>
                    <label
                      htmlFor='email'
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}>
                      Email
                    </label>
                    <Form.Item
                      name='email'
                      rules={[
                        {
                          required: true,
                          message: "email is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback>
                      <Input
                        size='large'
                        style={{ marginTop: "0.5rem" }}
                        placeholder='Enter email'
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className='gutter-row' span={12}>
                  <div>
                    <label
                      htmlFor='phone'
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}>
                      Phone
                    </label>
                    <Form.Item
                      name='phone'
                      rules={[
                        {
                          required: true,
                          message: "phone is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback>
                      <Input
                        size='large'
                        style={{ marginTop: "0.5rem" }}
                        placeholder='Enter phone'
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className='gutter-row' span={12}>
                  <div>
                    <label
                      htmlFor='password'
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}>
                      Password
                    </label>
                    <Form.Item
                      name='password'
                      rules={[
                        {
                          required: true,
                          message: "phone is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback>
                      <Input
                        size='large'
                        style={{ marginTop: "0.5rem" }}
                        type='password'
                        placeholder='Enter password'
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col className='gutter-row' span={12}>
                  <div>
                    <label
                      htmlFor='address'
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}>
                      Address
                    </label>
                    <Form.Item
                      name='address'
                      rules={[
                        {
                          required: true,
                          message: "address is required",
                        },
                        { whitespace: true },
                      ]}
                      hasFeedback>
                      <Input
                        size='large'
                        style={{ marginTop: "0.5rem" }}
                        type='address'
                        placeholder='Enter address'
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
                size='large'>
                Add Delivery
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default CreateDelivery;
