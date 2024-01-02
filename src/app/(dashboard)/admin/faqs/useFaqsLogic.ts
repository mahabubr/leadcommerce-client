import { Form, message } from "antd";
import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useGetAllFAQsQuery,
  useUpdateFAQMutation,
} from "@/redux/faqApi/faqApi";

const useFaqsLogic = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4); // limit
  const [sortBy, setSortBy] = useState("order_code");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [editableDocument, setEditableDocument] = useState<any>({});
  const [updateFAQs, { isLoading: saveAnsLoader }] = useUpdateFAQMutation();

  const router = useRouter();

  const [updateStatus, setUpdateStatus] = useState({
    data: "",
    id: "",
  });

  const handleChangeAns = (e: any, id: string) => {
    console.log("handleChangeAns", editableDocument, id);
    setEditableDocument({
      ...editableDocument,
      [id]: e.target.value,
    });
  };

  useEffect(() => {
    updateFAQs({ formData: updateStatus }).then((res: any) => {
      if (res?.success) {
        message.success("Status Update Successful");
      }
    });
  }, [updateFAQs, updateStatus]);

  const query: any = {};

  // * state declaration
  query["limit"] = limit;
  query["page"] = page;

  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllFAQsQuery({ ...query });
  const orderData = data?.data;

  // * PageLimit Change
  const handlePagelimitChange = (value: any) => {
    setLimit(value);
  };

  // * Filter 🚀🚀🚀
  // * SearchBy Order ID
  const onSearch = (value: any, _e: any, info: any) => {
    setPage(1);
  };
  // * Order Status
  const handleChange = (value: string) => {
    setPage(1);
  };
  // * routing action
  const handleRouteUpdate = (_id: string) => router.push(`/order/${_id}`);

  // * Date Picker
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  // *

  const saveAns = async (id: string) => {
    if (!editableDocument[id]) {
      message.error("Ans is not edited for this element");
      return;
    }
    const response: any = await updateFAQs({
      FAQId: id,
      formData: { ans: editableDocument[id] },
    });
    setEditableDocument({
      ...editableDocument,
      current: id,
    });
    if (response?.data?.ans) {
      message.success("Answer saved to database");
    }
  };
  return {
    setUpdateStatus,
    handlePagelimitChange,
    orderData,
    page,
    limit,
    data,
    setLimit,
    setPage,
    onSearch,
    handleChange,
    isLoading,
    onChange,
    handleChangeAns,
    saveAns,
    editableDocument,
    saveAnsLoader,
  };
};

export default useFaqsLogic;
