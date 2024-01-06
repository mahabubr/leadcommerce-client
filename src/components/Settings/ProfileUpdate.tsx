import React, { useState } from "react";
import ProfileUpdateFrom from "./ProfileUpdateFrom";
import ProfileImageUpload from "./ProfileImageUpload";
import { Divider, UploadFile, Form, notification, message } from "antd";
import { Button, Flex } from "antd";
import style from "./static/profileUpload.module.css";
import {
  useGetAEmployeQuery,
  useUpdateEmployeMutation,
} from "@/redux/employees/employeesApi";
const initialData = {
  full_name: "",
  email: "",
  phone: "",
  country: "",
};

const ProfileUpdate = () => {
  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetAEmployeQuery({});

  const userData = data && data?.data;
  console.log(userData.image.avatar);
  const [updateEmploye] = useUpdateEmployeMutation();
  // states
  const [fileList, setFileList] = useState<UploadFile | any>();
  const [api, contextHolder] = notification.useNotification();
  const [isUpdateLoading, setUpdateIsLoading] = useState(false);

  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    let formData = new FormData();
    if (values.full_name) {
      formData.append("full_name", values.full_name);
    } else {
      formData.append("full_name", userData.full_name);
    }
    if (values.email) {
      formData.append("email", values.email);
    } else {
      formData.append("email", userData.email);
    }
    if (values.phone) {
      formData.append("phone", values.phone);
    } else {
      formData.append("phone", userData.phone);
    }
    if (values.country) {
      formData.append("country", values.country);
    } else {
      formData.append("country", userData.country);
    }
    if (fileList) {
      formData.append("image", fileList.originFileObj);
    }
    // console.log([...formData.entries()]);

    /* //** calling api */
    /* //** handle product create response */
    try {
      setUpdateIsLoading(true);
      await updateEmploye(formData).then((res: any) => {
        if (res?.data?.success) {
          message.success(res?.data?.message);
          form.setFieldsValue(initialData);

          setFileList(null);

          api.success({
            message: `${res?.data?.message}`,
            description: (
              <div>this product is listed in the product section</div>
            ),
            placement: "bottomLeft",
          });
          setUpdateIsLoading(false);
        } else {
          setUpdateIsLoading(false);
          api.error({
            message: `${res?.data?.message}`,
            description: <div>Product not listed in the product list.</div>,
            placement: "bottomLeft",
          });
        }
      });
    } catch (error) {
      setUpdateIsLoading(false);
      message.error("Not able to update");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.fromDiv}>
          <ProfileUpdateFrom
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            data={data}
            isLoading={isLoading}
          />
        </div>
        <div className={style.imageUpDiv}>
          <ProfileImageUpload
            userData={userData}
            fileList={fileList}
            setFileList={setFileList}
          />
        </div>
      </div>
      <Divider />
      <div className={style.cardMainDiv}>
        <div className={style.singleCard}>
          <div
            style={{
              height: "100px",
              padding: "1rem",
              fontSize: "16px",
              backgroundColor: "#f1f1f1",
            }}>
            <Button
              size='small'
              style={{
                float: "inline-end",
                backgroundColor: "#2c3e50",
                color: "#f1f1f1",
              }}>
              Change
            </Button>
            <h6 style={{ fontSize: "1rem" }}>Password</h6>
            <small style={{ color: "#2c3e50" }}>
              You can reset or change your password by clicking here
            </small>
          </div>
        </div>
        <div className={style.singleCard}>
          <div
            style={{
              height: "100px",
              padding: "1rem",
              fontSize: "16px",
              backgroundColor: "#f1f1f1",
            }}>
            <Button
              size='small'
              style={{
                float: "inline-end",
                backgroundColor: "#2c3e50",
                color: "#f1f1f1",
              }}>
              Deactivate
            </Button>
            <h6 style={{ fontSize: "1rem" }}>Remove</h6>
            <small style={{ color: "#2c3e50" }}>
              Once you delete your account, there is no going back
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
