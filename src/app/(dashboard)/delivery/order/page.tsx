"use client";

import { Input, Table, Tag, Select, DatePicker, Button } from "antd";
// import type { ColumnsType } from "antd/es/table";
// import type { DatePickerProps } from "antd";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import style from "./order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";

import { useState } from "react";
import { useGetAllOrderForDeliverymanQuery } from "@/redux/order/orderApi";

const DeliveryMap = dynamic(() => import("@/components/ui/DeliveryMap"), {
  ssr: false,
});

import ButtonGroup from "antd/es/button/button-group";
import dynamic from "next/dynamic";

const { Search } = Input;

const Orders = () => {
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
              <Tag color="warning">{payment_status}</Tag>
            ) : payment_status === "completed" ? (
              <Tag color="success">{payment_status}</Tag>
            ) : payment_status === "canceled" ? (
              <Tag color="error">{payment_status}</Tag>
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
              onClick={() => handleRouteUpdate(_id)}
            >
              Details
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
  const [sortOrder, setSortOrder] = useState("desc");
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
  const { data }: { data?: any } = useGetAllOrderForDeliverymanQuery({
    ...query,
  });
  const orderData = data?.data;

  // * PageLimit Change
  const handlePagelimitChange = (value: any) => {
    setLimit(value);
  };

  // * Date Picker
  const onChange: any = (date: any, dateString: any) => {
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
  const handleRouteUpdate = (_id: string) =>
    router.push(`/delivery/order/${_id}`);
  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.mainFilter}>
          <div className={style.filterOne}>
            <Input
              size="middle"
              placeholder="Search Orders"
              suffix={<CiSearch />}
              allowClear
              style={{ width: "100%" }}
            />
          </div>
          <div className={style.filterTwo}>
            <Select placeholder="Status" allowClear />
            <Select
              onChange={handlePagelimitChange}
              style={{ width: "100px", textTransform: "capitalize" }}
              options={productItemSortPage}
              defaultValue={productItemSortPage[0]}
              // defaultValue={selectedStatus}
            />
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={orderData}
          scroll={{ x: 700 }}
          pagination={{
            current: page,
            pageSize: limit,
            total: data?.meta?.total,
            onChange: (page, pageSize) => {
              setLimit(pageSize);
              setPage(page);
            },
          }}
        />
      </div>

      <div className={style.sideContent}>
        <DeliveryMap />
      </div>
    </div>
  );
};

export default Orders;
