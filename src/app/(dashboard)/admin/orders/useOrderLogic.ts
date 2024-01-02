import { message } from "antd";
import type { DatePickerProps } from "antd";
import { useEffect, useState } from "react";
import {
  useGetAllOrderQuery,
  useUpdateStatusMutation,
} from "@/redux/order/orderApi";
import { useRouter } from "next/navigation";
import { useGetAllDeliverysQuery } from "@/redux/delivery/deliveryApi";

const useOrderLogic = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4); // limit
  const [sortBy, setSortBy] = useState("order_code");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [selectedDeliveryBoy, setSelectedDeliveryBoy] = useState<
    string | undefined
  >(undefined);
  const [newOrderDeliveryEmails, setNewOrderDeliveryEmail] = useState<any>({});

  const { data: deliveryOption, isLoading: deliveryLoader }: any =
    useGetAllDeliverysQuery({ limit: 100 });
  const router = useRouter();
  const [updateStatus, setUpdateStatus] = useState({
    data: "",
    id: "",
  });

  const [updateOrderStatus, { isLoading: deliveryStatusLoader }] =
    useUpdateStatusMutation();

  useEffect(() => {
    updateOrderStatus({ formData: updateStatus }).then((res: any) => {
      if (res?.success) {
        message.success("Status Update Successful");
      }
    });
  }, [updateOrderStatus, updateStatus]);

  const query: any = {};

  // * state declaration
  query["limit"] = limit;
  query["page"] = page;

  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  if (orderCode) {
    query["order_code"] = orderCode;
  }
  if (orderStatus) {
    if (orderStatus === "all") {
      setOrderStatus("");
    }

    query["order_status"] = orderStatus;
  }
  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllOrderQuery({ ...query });
  const orderData = data?.data;

  // * PageLimit Change
  const handlePagelimitChange = (value: any) => {
    setLimit(value);
  };

  // * Date Picker
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  // * Filter 🚀🚀🚀
  // * SearchBy Order ID
  const onSearch = (value: any, _e: any, info: any) => {
    setPage(1);
    setOrderCode(value);
  };
  // * Order Status
  const handleChange = (value: string) => {
    setPage(1);
    setOrderStatus(value);
  };
  // * routing action
  const handleRouteUpdate = (_id: string) => router.push(`/order/${_id}`);

  const findSelectOptions = () => {
    return (
      deliveryOption?.data?.map((item: any) => {
        return {
          value: item.email,
          label: item.email,
        };
      }) || {}
    );
  };

  const handleChangeSelect = (email: any, id: string) => {
    setNewOrderDeliveryEmail({
      ...newOrderDeliveryEmails,
      [id]: email,
    });
  };

  const handleSaveDelivery = async (id: string) => {
    if (!newOrderDeliveryEmails[id]) {
      message.error("You didn't changed orders status");
      return;
    }
    setNewOrderDeliveryEmail({ ...newOrderDeliveryEmails, current: id });
    const response: any = await updateOrderStatus({
      id,
      formData: { delivery_email: newOrderDeliveryEmails[id], id },
    });

    if (response?.data?.delivery_email) {
      message.success("delivery_email to database");
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
    onChange,
    isLoading,
    deliveryLoader,
    deliveryOption,
    findSelectOptions,
    setSelectedDeliveryBoy,
    selectedDeliveryBoy,
    handleChangeSelect,
    handleSaveDelivery,
    deliveryStatusLoader,
    newOrderDeliveryEmails,
  };
};

export default useOrderLogic;
