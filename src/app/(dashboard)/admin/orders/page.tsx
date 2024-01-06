"use client";
import { Input, Table, Tag, Select, DatePicker, Button, Card } from "antd";
import { CiSearch } from "react-icons/ci";
import style from "./order.module.css";
import useOrderLogic from "./useOrderLogic";
import {
  IOrderStatus,
  IPaymentStatus,
  classByOrderStatus,
  classByPaymentStatus,
} from "@/Helper/utils";
import PSelect from "@/components/products/partials/PSelect";
import Loader from "@/components/ui/Loader";

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
    page: currentPage,
    limit: currentLimit,
    data,
    setLimit: setCurrentLimit,
    setPage: setCurrentPage,
    onSearch,
    handleChange,
    onChange,
    setSearchTerm,
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
            placeholder="delivery boy"
            items={findSelectOptions()}
            selected={delivery_email}
            handleChange={(value: any) => handleChangeSelect(value, _id)}
            label=""
            size="small"
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
            }
            size="middle"
            type="primary"
          >
            Save
          </Button>
        );
      },
    },
  ];

  if(isLoading) return <Loader />

  // * Filtering and Searching

  return (
    <>
      <div>
        <Card
          style={{ boxShadow: "3px 3px 15px #ddd" }}
          title="Orders"
          extra={
            <div className={style.mainFilter}>
              <div className={style.filterOne}>
                <Input
                  size="middle"
                  placeholder="Search Orders"
                  suffix={<CiSearch />}
                  allowClear
                  style={{ width: "100%" }}
                  onChange={(e: any) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          }
        >
          <Table
            columns={columns}
            dataSource={orderData}
            scroll={{ x: 700 }}
            loading={isLoading}
            pagination={{
              current: currentPage,
              pageSize: currentLimit,
              defaultCurrent: 1,
              pageSizeOptions: ["5", "10", "20"],
              total: orderData?.meta?.total,
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setCurrentLimit(pageSize);
              },
              onShowSizeChange: (current, size) => {
                setCurrentPage(current);
                setCurrentLimit(size);
              },
              showSizeChanger: true,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default Orders;
