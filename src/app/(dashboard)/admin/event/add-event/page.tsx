"use client";
import {
  Card,
  Row,
  Col,
  Button,
  Upload,
  Form,
  Select,
  UploadFile,
  message,
  UploadProps,
} from "antd";
import Image from "next/image";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { paths } from "@/paths/paths";
import style from "./add_event.module.css";
import PCBreadcrumb from "@/components/products/partials/PCBreadcrumb";
import AntInput from "@/components/ui/AntInput";
import AntDateTimePicker from "@/components/event/dateTimePicker";
import AntTimePicker from "@/components/event/AntTimePicker";
import { eventStatusOptions } from "@/components/event/utils/eventData";
import { useEffect, useState } from "react";
import { useAddEventsMutation } from "@/redux/events/eventApi";

const initialData = {
  eventTitle: "",
  eventDate: "",
  organizer: "",
  status: "",
  startTime: "",
  endTime: "",
  location: "",
  description: "",
  ticketPrice: 0,
  seat: 0,
};

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
};

const AddEvent = () => {
  /* //** form  */
  const [form] = Form.useForm();
  const [addEvents] = useAddEventsMutation();

  // const { handleCheckboxChange, onFinish, fileList, form, isLoading, api, currentImage, checkedValues, contextHolder, setCurrentImage, setFileList, beforeFileUpload, onChangeFileHandle } = useAddEvent();

  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [fileList, setFileList] = useState<UploadFile | any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (fileList && fileList.originFileObj) {
      try {
        const newImage = URL.createObjectURL(fileList.originFileObj);
        console.log(newImage);
        setCurrentImage(newImage);
        console.log(setCurrentImage);
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  }, [fileList]);

  //** handle onfinish  */
  const onFinish = async (values: any) => {
    let formData = new FormData();
    formData.append("image", fileList.originFileObj);
    formData.append("data", JSON.stringify(values));

    /* //** calling api */
    try {
      setIsLoading(true);
      await addEvents(formData).then((res: any) => {
        if (res?.data?.success) {
          message.success(res?.data?.message);
          // form.setFieldsValue(initialData);
          // setFileList(null);
          // setCurrentImage(null);
          message.success(`${res?.data?.message}`);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          message.error(`${res?.data?.message}`);
        }
      });
    } catch (error) {
      setIsLoading(false);
      message.error("Not able to create");
    }
  };

  return (
    <div className={style.add_event_cont}>
      {/* {contextHolder} */}

      <Card title="Add Event" style={{ boxShadow: "3px 3px 15px #ddd" }}>
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
            <Col className="gutter-row" xs={24} lg={9}>
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
                    height: "100%",
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
                    {...props}
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
              <Row>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntInput
                    title={"Event Title"}
                    name={"eventTitle"}
                    uppercase={true}
                    req_message={"Event Title is required"}
                    placeholder={"type Event Title"}
                    whiteSpace={true}
                  />
                </Col>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntInput
                    title={"Organizer"}
                    name={"organizer"}
                    uppercase={true}
                    req_message={"Organizer is required"}
                    placeholder={"type organizer name"}
                    whiteSpace={true}
                  />
                </Col>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntInput
                    title={"Location"}
                    name={"location"}
                    uppercase={true}
                    req_message={"Location is required"}
                    placeholder={"type Location"}
                    whiteSpace={true}
                  />
                </Col>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntInput
                    title={"Ticket Price"}
                    name={"ticketPrice"}
                    uppercase={true}
                    req_message={"Ticket Price is required"}
                    placeholder={"type Ticket Price"}
                    whiteSpace={true}
                  />
                </Col>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntInput
                    title={"Seat number"}
                    name={"seat"}
                    uppercase={true}
                    req_message={"Seat number is required"}
                    placeholder={"type Seat number"}
                    type="number"
                    whiteSpace={true}
                  />
                </Col>
                <Col className="gutter-row" xs={24} sm={12}>
                  <AntDateTimePicker
                    title={"Event Date"}
                    name={"eventDate"}
                    uppercase={true}
                    req_message={"Event date is required"}
                    whiteSpace={true}
                  />
                </Col>

                <Col className="gutter-row" xs={24} sm={12}>
                  <AntTimePicker
                    title={"Start Time"}
                    name={"startTime"}
                    uppercase={true}
                    req_message={"Start time is required"}
                    whiteSpace={true}
                  />
                </Col>

                <Col className="gutter-row" xs={24} sm={12}>
                  <AntTimePicker
                    title={"End Time"}
                    name={"endTime"}
                    uppercase={true}
                    req_message={"End time is required"}
                    whiteSpace={true}
                  />
                </Col>

                <Col className="gutter-row" xs={24}>
                  <div>
                    <label
                      htmlFor="status"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Event Status
                    </label>

                    <Form.Item
                      name="status"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      hasFeedback
                    >
                      <Select
                        size="large"
                        style={{ width: "100%", marginTop: "0.5rem" }}
                        placeholder="Select a status"
                      >
                        {eventStatusOptions.map((pt: any, index: number) => (
                          <Select.Option key={index} value={`${pt.value}`}>
                            {pt?.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>
                </Col>

                <Col className="gutter-row" xs={24}>
                  <AntInput
                    title={"Description"}
                    name={"description"}
                    uppercase={true}
                    req_message={"Description is required"}
                    placeholder={"type Description"}
                    whiteSpace={true}
                    textarea={true}
                  />
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                  size="middle"
                >
                  Add Event
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default AddEvent;
