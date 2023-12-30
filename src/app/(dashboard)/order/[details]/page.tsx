"use client";
import { Button, Card, Input, Select, Tag, message } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ImPrinter } from "react-icons/im";
import { CiCalendar } from "react-icons/ci";
import { FaCcVisa, FaTruckLoading } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import TextArea from "antd/es/input/TextArea";
import {
  useGetSingleOrderQuery,
  useUpdateStatusMutation,
} from "@/redux/order/orderApi";
import { dateFormater } from "@/Helper/dateFormater";
import style from "../order.module.css";
import OrderDetailsTable from "@/components/orderTable/OrderDetailsTable";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/ui/Loader";


const OrderDetail = ({ params }: { params: any }) => {
  const id = params.details;
  const { data, isLoading }: { data?: any, isLoading: boolean } = useGetSingleOrderQuery(id);
  const orderData = data?.data;
  const formatedDate = dateFormater(orderData?.createdAt);

  const products = orderData?.order_product_list;

  const componentRef = useRef(null);

  const [updateOrderStatus] = useUpdateStatusMutation();

  const [updateStatus, setUpdateStatus] = useState("");

  useEffect(() => {
    if (updateStatus) {
      updateOrderStatus({
        formData: {
          id,
          data: updateStatus,
        },
      }).then((res: any) => {
        if (res?.data?.success) {
          message.success("Status Update Successful");
        }
      });
    }
  }, [updateOrderStatus, updateStatus, id]);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.spContainer}>
      <Card
        title="Order Detail"
        ref={componentRef}
        extra={
          <div className={style.sercheAndPrint}>
            <Select
              placeholder={orderData?.order_status}
              allowClear
              options={[
                { value: "pending", label: "pending" },
                { value: "delivered", label: "delivered" },
                { value: "cancel", label: "cancel" },
                { value: "paused", label: "paused" },
                { value: "accept", label: "accept" },
              ]}
              onChange={setUpdateStatus}
              style={{ width: 200 }}
            />
            <ButtonGroup>
              <Button onClick={handlePrint} type="primary">Invoice</Button>
              <Button type="dashed" onClick={handlePrint}>
                <ImPrinter />
              </Button>
            </ButtonGroup>
          </div>
        }
      >
        <div className={style.orderInfo}>
          <div
            style={{
              display: "flex",
              padding: 20,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <CiCalendar />
              <h4>{formatedDate}</h4>
            </div>
            <p>Order Id : {orderData?.order_code}</p>
          </div>
          <div
            style={{
              textAlign: "left",
              backgroundColor: "#f1f1f1",
              padding: 20,
              borderRadius: 8,
              boxShadow: "3px 3px 15px #ddd",
            }}
          >
            <h4>Payment Info</h4>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FaCcVisa />
              Master Card 21502151051
            </div>
            <p>Business Name : LLC To PSA</p>
            <p>Phone : +880 14 58 1871115</p>
          </div>
        </div>
        <div className={style.orderCardGrid}>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <div
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: 10,
                width: 50,
                height: 50,
                borderRadius: "50%",
                fontSize: 30,
                display: "grid",
                placeItems: "center",
              }}
            >
              <BsFillPersonFill />
            </div>
            <div>
              <h3>Customer</h3>
              <p>John De</p>
              <p>Johnde@email.com</p>
              <p>+880 14524 57412</p>
              <p>Status: &nbsp;<span>
                {orderData?.payment_status === "pending" ? (
                  <Tag style={{ padding: '0px 4px' }} color="warning">pending</Tag>
                ) : orderData?.payment_status === "canceled" ? (
                  <Tag style={{ padding: '2px 4px' }} color="error">Delivered</Tag>
                ) : orderData?.payment_status === "completed" ? (
                  <Tag style={{ padding: '2px 4px' }} color="success">Cancel</Tag>
                ) : null}
              </span></p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: 10,
                width: 50,
                height: 50,
                borderRadius: "50%",
                fontSize: 30,
                display: "grid",
                placeItems: "center",
              }}
            >
              <FaTruckLoading />
            </div>
            <div>
              <h3>Order Info</h3>
              <p>Shipping: Fargo express</p>
              <p>Pay method: card</p>
              <p>Status: &nbsp;<span>
                {orderData?.order_status === "pending" ? (
                  <Tag style={{ padding: '0px 4px' }} color="warning">pending</Tag>
                ) : orderData?.order_status === "delivered" ? (
                  <Tag style={{ padding: '2px 4px' }} color="success">Delivered</Tag>
                ) : orderData?.order_status === "cancel" ? (
                  <Tag style={{ padding: '2px 4px' }} color="error">Cancel</Tag>
                ) : orderData?.order_status === "paused" ? (
                  <Tag style={{ padding: '2px 4px' }} color="cyan">Paused</Tag>
                ) : orderData?.order_status === "accept" ? (
                  <Tag style={{ padding: '2px 4px' }} color="blue">Accept</Tag>
                ) : null}
              </span></p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: 10,
                width: 50,
                height: 50,
                borderRadius: "50%",
                fontSize: 30,
                display: "grid",
                placeItems: "center",
              }}
            >
              <HiLocationMarker />
            </div>
            <div>
              <h3>Deliver to</h3>
              <p>
                City: {orderData?.shipment_address?.district},{" "}
                {orderData?.shipment_address?.country}
              </p>
              <p>
                Road No :{orderData?.shipment_address?.road_no}, House No:{" "}
                {orderData?.shipment_address?.house_no}
              </p>
              <p>Area: {orderData?.shipment_address?.area}</p>
              <p>Status: &nbsp;<span>
                {orderData?.shipment_status === "pending" ? (
                  <Tag style={{ padding: '0px 4px' }} color="warning">pending</Tag>
                ) : orderData?.shipment_status === "canceled" ? (
                  <Tag style={{ padding: '2px 4px' }} color="error">Delivered</Tag>
                ) : orderData?.shipment_status === "completed" ? (
                  <Tag style={{ padding: '2px 4px' }} color="success">Cancel</Tag>
                ) : null}
              </span></p>
            </div>
          </div>
        </div>
        <div className={style.tableAndCommentBoxDiv}>
          <div className={style.orderTable}>
            <OrderDetailsTable products={products} total_price={orderData?.total_amount} isLoading={isLoading} />
          </div>
          <div>
            <TextArea
              style={{
                marginBottom: 20,
                boxShadow: "3px 3px 8px #ddd",
              }}
              rows={4}
              placeholder="maxLength is 6"
              maxLength={6}
            />
            <Button>Save Note</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;
