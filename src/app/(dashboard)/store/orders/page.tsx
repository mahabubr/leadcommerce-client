"use client";

import {
  Input,
  Table,
  Tag,
  Select,
  DatePicker,
  Button,
  message,
  Card,
} from "antd";
import type { DatePickerProps } from "antd";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import style from "./order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";

import { useEffect, useState } from "react";
import {
  useGetAllOrderForStoreQuery,
  useUpdateStatusMutation,
} from "@/redux/order/orderApi";
import ButtonGroup from "antd/es/button/button-group";
import Loader from "@/components/ui/Loader";

const { Search } = Input;

const Orders = () => {
  const [updateStatus, setUpdateStatus] = useState({
    data: "",
    id: "",
  });

  const [updateOrderStatus] = useUpdateStatusMutation();

  useEffect(() => {
    updateOrderStatus({ formData: updateStatus }).then((res: any) => {
      if (res?.data?.success) {
        message.success("Status Update Successful");
      }
    });
  }, [updateOrderStatus, updateStatus]);

  const router = useRouter();
  // * Table Columns
  const columns = [
    {
      title: "Order Code",
      dataIndex: "order_code",
      key: "_id",
      render: (order_code: any, _id: any) => <p key={_id}>{order_code}</p>,
    },
    {
      title: "Total Item",
      dataIndex: "total_items",
      key: "_id",
      render: (total_items: any, _id: any) => <p key={_id}>{total_items}</p>,
    },
    {
      title: "Total Quantity",
      dataIndex: "total_quantity",
      key: "_id",
      render: (total_quantity: any, _id: any) => (
        <p key={_id}>{total_quantity}</p>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "_id",
      render: (amount: any, _id: any) => <p key={_id}>{amount}</p>,
    },
    {
      title: "Order Status",
      dataIndex: "order_status",
      key: "_id",
      render: (order_status: any, _id: any) => {
        return (
          <>
            {order_status === "pending" ? (
              <Tag color="warning">pending</Tag>
            ) : order_status === "delivered" ? (
              <Tag color="success">Delivered</Tag>
            ) : order_status === "cancel" ? (
              <Tag color="error">Cancel</Tag>
            ) : order_status === "paused" ? (
              <Tag color="cyan">Paused</Tag>
            ) : order_status === "accept" ? (
              <Tag color="blue">Accept</Tag>
            ) : null}
          </>
        );
      },
    },

    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "_id",
      render: (payment_status: any, _id: any) => {
        return (
          <>
            {payment_status === "pending" ? (
              <Tag color="warning">Pending</Tag>
            ) : payment_status === "completed" ? (
              <Tag color="success">Completed</Tag>
            ) : payment_status === "canceled" ? (
              <Tag color="error">Canceled</Tag>
            ) : null}
          </>
        );
      },
    },
    {
      title: "Details",
      dataIndex: "",
      key: "_id",
      render: (_: any, { _id }: { _id: any }) => {
        return (
          <ButtonGroup>
            <Button
              type="primary"
              size="small"
              style={{ textDecoration: "underline" }}
              onClick={() => setUpdateStatus({ data: "accept", id: _id })}
            >
              Accept
            </Button>
            <Button
              type="default"
              size="small"
              style={{ textDecoration: "underline" }}
              onClick={() => setUpdateStatus({ data: "cancel", id: _id })}
            >
              Rejected
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  // * Filtering and Searching
  const query: any = {};

  // * state declaration
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4); // limit
  const [sortBy, setSortBy] = useState("order_code");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [orderCode, setOrderCode] = useState("");
  const [orderStatus, setOrderStatus] = useState("");

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
    useGetAllOrderForStoreQuery({ ...query });
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
  return (
    <div className={style.container}>
      <Card
        style={{ boxShadow: "3px 3px 15px #ddd" }}
        title="All Orders"
        extra={
          <Input
            size="middle"
            placeholder="Search Orders"
            suffix={<CiSearch />}
            allowClear
            style={{ width: "100%" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        }
      >
        <Table
          columns={columns}
          dataSource={orderData}
          scroll={{ x: 700 }}
          pagination={{
            current: page,
            pageSize: limit,
            defaultCurrent: 1,
            pageSizeOptions: ["5", "10", "20"],
            total: data?.meta?.total,
            onChange: (page, pageSize) => {
              setPage(page);
              setLimit(pageSize);
            },
            onShowSizeChange: (current, size) => {
              setPage(current);
              setLimit(size);
            },
            showSizeChanger: true,
          }}
          loading={isLoading && { indicator: <Loader /> }}
        />
      </Card>

      <div className={style.sideContent}>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter byss</p>
        <div className={style.sideItems}>
          <div>
            <p style={{ fontSize: 12 }}>Order Id</p>
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Customer</p>
            <Input placeholder="Type Here" size="middle" />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Order Status</p>
            <Select
              placeholder="Status"
              allowClear
              onChange={handleChange}
              options={[
                { value: "all", label: "All" },
                { value: "pending", label: "Pending" },
                { value: "completed", label: "Completed" },
                { value: "canceled", label: "Canceled" },
              ]}
              style={{ marginTop: 10 }}
            />
          </div>
          <div>
            <p style={{ fontSize: 12 }}>Date</p>
            <DatePicker
              onChange={onChange}
              picker="month"
              style={{ marginTop: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
