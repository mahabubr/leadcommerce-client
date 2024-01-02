/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Card, Image, Modal, Upload, message } from "antd";
import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { useGetAEmployeQuery } from "@/redux/employees/employeesApi";

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ProfileImageUpload = () => {
  const { data, isLoading }: any = useGetAEmployeQuery({});
  console.log(data);

  const [currentImage, setCurrentImage] = useState<string | null>(null);
  // const [fileList, setFileList] = useState<UploadFile | any>();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[] | null>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // console.log(fileList[0].thumbUrl);
  return (
    <>
      <div>
        {/* <Upload
          // defaultValue={data?.data?.image}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          fileList={fileList}
          style={{ height: "250px", width: "250px" }}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
        <img
          // defaultValue={data?.data?.image}
          alt="example"
          style={{ width: "100%" }}
          src={data?.image}
        />
        </Modal> */}
        <Card
          title=""
          bordered
          style={{ maxHeight: "800px", position: "relative" }}
        >
          <Image
            src={data?.data?.image}
            height={200}
            width={300}
            alt="preview"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
            }}
          />

          <div style={{ position: "absolute", top: "40px", left: "37px" }}>
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
              onChange={(info: any) => {
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
          <div style={{ position: "absolute", top: "40px", right: "37px" }}>
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
      </div>
    </>
  );
};

export default ProfileImageUpload;
