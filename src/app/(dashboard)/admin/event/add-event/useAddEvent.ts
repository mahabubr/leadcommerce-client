import { useEffect, useState } from "react";
import { message, UploadFile, Form } from "antd";
import { notification } from "antd";
import { RcFile } from "antd/es/upload";
import { jwtDecode } from "jwt-decode";
import { useAddEventsMutation } from "@/redux/events/eventApi";

const useAddEvent = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>(["S"]);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [api, contextHolder] = notification.useNotification();
  const [addEventFunc, { isLoading }] = useAddEventsMutation();

  /* //** form  */
  const [form] = Form.useForm();

  // states
  const [fileList, setFileList] = useState<UploadFile | any>();

  //** handle onfinish  */
  const onFinish = async (values: any) => {
    let formData = new FormData();
    console.log(values, "onFinish", checkedValues, currentImage);

    const token = localStorage.getItem("accessToken");
    const body: { id: string } = jwtDecode(token as string);
    values.shop_id = body.id;
    console.log(values);
    /* //** calling api */
    /* //** handle product create response */
    try {
      // const res = await addEventFunc(values);
      // console.log(res);
    } catch (error) {
      message.error("Not able to update");
    }
  };

  //** checkbox function handler
  const handleCheckboxChange = (value: string) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
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
    handleCheckboxChange,
    onFinish,
    fileList,
    form,
    isLoading,
    api,
    currentImage,
    checkedValues,
    contextHolder,
    setFileList,
    setCurrentImage,
    beforeFileUpload,
    onChangeFileHandle,
  };
};

export default useAddEvent;
