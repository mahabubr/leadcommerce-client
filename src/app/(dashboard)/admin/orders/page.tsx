"use client";
import { Input, Table, Tag, Select, DatePicker, Button } from "antd";
import { CiSearch } from "react-icons/ci";
import style from "../../order/order.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";
import ButtonGroup from "antd/es/button/button-group";
import useOrderLogic from "./useOrderLogic";
import {
  IOrderStatus,
  IPaymentStatus,
  classByOrderStatus,
  classByPaymentStatus,
} from "@/Helper/utils";
import PSelect from "@/components/products/partials/PSelect";

const { Search } = Input;

const Orders = () => {
  const {
    newOrderDeliveryEmails,
    deliveryStatusLoader,
    handleSaveDelivery,
    handleChangeSelect,
    setSelectedDeliveryBoy,
    selectedDeliveryBoy,
    findSelectOptions,
    isLoading,
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
  } = useOrderLogic();

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
          <Tag color={classByOrderStatus[order_status as IOrderStatus]}>
            {order_status}
          </Tag>
        );
      },
    },

    {
      title: "Payment Status",
      dataIndex: "payment_status",
      key: "_id",
      render: (payment_status: any, _id: any) => {
        return (
          <Tag color={classByPaymentStatus[payment_status as IPaymentStatus]}>
            {payment_status}
          </Tag>
        );
      },
    },
    {
      title: "Delivery options",
      dataIndex: "",
      key: "_id",
      render: (_: any, { _id, delivery_email }: any) => {
        return (
          <PSelect
            placeholder='delivery boy'
            items={findSelectOptions()}
            selected={delivery_email}
            handleChange={(value: any) => handleChangeSelect(value, _id)}
            label=''
          />
        );
      },
    },
    {
      title: "Save",
      dataIndex: "",
      key: "_id",
      render: (_: any, { _id }: { _id: any }) => {
        return (
          <Button
            onClick={() => handleSaveDelivery(_id)}
            loading={
              (newOrderDeliveryEmails?.["current"] === _id &&
                deliveryStatusLoader) ||
              false
            }>
            Save
          </Button>
        );
      },
    },
  ];

  // * Filtering and Searching

  return (
    <>
      <div style={{ padding: "0px 20px" }}>
        <div
          style={{
            backgroundColor: "white",
            padding: "1vw",
            borderRadius: "8px",
            boxShadow:
              "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
          }}>
          <h3>All Orders</h3>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.mainContent}>
          <div className={style.mainFilter}>
            <div className={style.filterOne}>
              <Input
                size='middle'
                placeholder='Search Orders'
                suffix={<CiSearch />}
                allowClear
                style={{ width: "100%" }}
              />
            </div>
            <div className={style.filterTwo}>
              <Select placeholder='Status' allowClear />
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
            loading={isLoading}
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
          <p style={{ fontSize: 18, fontWeight: "bold" }}>Filter by</p>
          <div className={style.sideItems}>
            <div>
              <p style={{ fontSize: 12 }}>Order Id</p>
              <Search
                placeholder='input search text'
                allowClear
                onSearch={onSearch}
              />
            </div>
            <div>
              <p style={{ fontSize: 12 }}>Customer</p>
              <Input placeholder='Type Here' size='middle' />
            </div>
            <div>
              <p style={{ fontSize: 12 }}>Order Status</p>
              <Select
                placeholder='Status'
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
                picker='month'
                style={{ marginTop: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
