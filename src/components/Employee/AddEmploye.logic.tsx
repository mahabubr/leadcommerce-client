import { useEffect, useState } from "react";
import { message, UploadFile, Form, notification } from "antd";

import { RcFile } from "antd/es/upload";
import { useAddEmployesMutation } from "@/redux/employees/employeesApi";
import { jwtDecode } from "jwt-decode";

const initialData = {
  image: "",
  full_name: "",
  position: "",
  email: "",
  phone: "",
  password: "",
};

type resType = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};

const useAddEmploye = () => {
  const [api, contextHolder] = notification.useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [addEmployes, {}] = useAddEmployesMutation();

  /* //** form  */
  const [form] = Form.useForm();

  // states
  const [fileList, setFileList] = useState<UploadFile | any>();

  //** handle onfinish  */
  const onFinish = async (values: any) => {
    let formData = new FormData();
    if (values.email) {
      formData.append("email", values.email);
    }
    if (values.full_name) {
      formData.append("full_name", values.full_name);
    }
    if (values.password) {
      formData.append("password", values.password);
    }
    if (values.phone) {
      formData.append("phone", values.phone);
    }
    if (values.position) {
      formData.append("position", values.position);
    }
    if (fileList) {
      formData.append("image", fileList.originFileObj);
    }

    // console.log([...formData.entries()]);
    // const token = localStorage.getItem("accessToken");
    // const body: { id: string } = jwtDecode(token as string);
    // values.shop_id = body.id;

    /* //** calling api */
    /* //** handle product create response */
    try {
      setIsLoading(true);
      await addEmployes(formData).then((res: any) => {
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

          setIsLoading(false);
        } else {
          setIsLoading(false);
          api.error({
            message: `${res?.data?.message}`,
            description: <div>Product not listed in the product list.</div>,
            placement: "bottomLeft",
          });
        }
      });
    } catch (error) {
      setIsLoading(false);
      message.error("Not able to update");
    }
  };

  useEffect(() => {
    // console.log(fileList)
    if (fileList && fileList.originFileObj) {
      try {
        const newImage = URL.createObjectURL(fileList.originFileObj);
        console.log(newImage);
        setCurrentImage(newImage);
      } catch (error) {
        console.error("Error creating object URL:", error);
      }
    }
  }, [fileList]);

  const beforeFileUpload = (file: RcFile): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (file.size > 200000) {
        reject("File size must be under 200kb");
      } else {
        resolve("success");
      }
    });
  };

  const onChangeFileHandle = (info: any) => {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileList(info.file);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return {
    onFinish,
    fileList,
    form,
    isLoading,
    api,
    currentImage,
    contextHolder,
    setFileList,
    setCurrentImage,
    beforeFileUpload,
    onChangeFileHandle,
  };
};

export default useAddEmploye;
