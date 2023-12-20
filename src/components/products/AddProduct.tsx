"use client";
import React, { useState } from "react";
import PCBreadcrumb from "./partials/PCBreadcrumb";
import {
  Card,
  Row,
  Col,
  Button,
  Upload,
  UploadProps,
  message,
  UploadFile,
  Space,
} from "antd";
import { productItems } from "./utils/productData";
import Image from "next/image";
import { UploadOutlined } from "@ant-design/icons";
import PInput from "./partials/PInput";
import PSelect from "./partials/PSelect";
import PTextarea from "./partials/PTextarea";
import PInputNumber from "./partials/PInputNumber";
import PColorPicker from "./partials/PColorPicker";
import PCheckbox from "./partials/PCheckbox";

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
};

const AddProduct = () => {
  // states
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );
  const [fileList, setFileList] = useState<UploadFile | any>();

  // handler
  const handleChange = (value: string) => setSelectedCategory(value);

  return (
    <>
      <PCBreadcrumb title="Create Product" />

      <Card title="Add Product" bordered style={{ marginTop: "20px" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col className="gutter-row" span={9}>
            <Card
              title=""
              bordered
              style={{ maxHeight: "800px", position: "relative" }}
            >
              {/* {fileList && fileList.length > 0 && fileList[0].status === 'done' && (
                                <Image src={fileList[0].originFileObj} alt={fileList[0].name} width={200} height={200} />
                            )} */}

              <Image
                src="/preview.jpg"
                height={500}
                width={630}
                alt="preview"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                }}
              />

              <div style={{ position: "absolute", top: "40px", right: "37px" }}>
                <Upload
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
            </Card>
          </Col>

          <Col className="gutter-row" span={15}>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
              <Col className="gutter-row" span={12}>
                <PInput
                  name="title"
                  label="Product title"
                  placeholder="Enter product title"
                />
              </Col>

              <Col className="gutter-row" span={12}>
                <PSelect
                  placeholder="Select a category"
                  items={productItems}
                  selected={selectedCategory}
                  handleChange={handleChange}
                  label="Product Category"
                />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{ margin: "20px 0" }}
              >
                <PInput name="slug" label="Slug" placeholder="Enter slug" />
              </Col>

              <Col className="gutter-row" span={24}>
                <PTextarea
                  name="description"
                  placeholder="Product description here"
                  label="Short Description"
                />
              </Col>

              <Col
                className="gutter-row"
                span={12}
                style={{ margin: "20px 0" }}
              >
                <PColorPicker label="Colors" />
              </Col>

              <Col
                className="gutter-row"
                span={12}
                style={{ margin: "20px 0" }}
              >
                <div>
                  <label
                    style={{
                      textTransform: "uppercase",
                      fontWeight: 500,
                      display: "block",
                    }}
                  >
                    Size
                  </label>

                  <Space style={{ marginTop: "0.5rem" }}>
                    <PCheckbox label="S" />
                    <PCheckbox label="M" />
                    <PCheckbox label="L" />
                    <PCheckbox label="XL" />
                    <PCheckbox label="XLL" />
                  </Space>
                </div>
              </Col>

              <Col className="gutter-row" span={12}>
                <PInputNumber name="price" label="Product Price" />
              </Col>

              <Col className="gutter-row" span={12}>
                <PInputNumber name="quantity" label="Product Quantity" />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{ margin: "20px 0" }}
              >
                <PTextarea
                  name="fullDescription"
                  placeholder="Product full description here"
                  label="Full Description"
                />
              </Col>

              <Col
                className="gutter-row"
                span={24}
                style={{ marginBottom: "20px" }}
              >
                <PInput
                  name="tags"
                  label="Product Tags"
                  placeholder="Enter product tags"
                />
              </Col>
            </Row>

            <Button type="primary" size="large">
              Add Product
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default AddProduct;
