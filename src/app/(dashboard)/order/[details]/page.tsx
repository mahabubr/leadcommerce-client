"use client";
import { Button, Card, Input, Select, Tag } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { ImPrinter } from "react-icons/im";
import { CiCalendar } from "react-icons/ci";
import { FaCcVisa, FaTruckLoading } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import TextArea from "antd/es/input/TextArea";
import { useGetSingleOrderQuery } from "@/redux/order/orderApi";
import { dateFormater } from "@/Helper/dateFormater";
import style from "../order.module.css";
import OrderDetailsTable from "@/components/orderTable/orderDetailsTable";
const dataa = [
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color='blue'>Pending</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color='yellow'>Shipment</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color='green'>Delivery</Tag>,
  },
  {
    orderId: 2535,
    Product: "Dummy Name",
    unit: 150,
    date: "Oct 20, 2018",
    cost: 15,
    status: <Tag color='red'>Canceled</Tag>,
  },
];

const thead = [
  "Shop Id",
  "Product Name",
  "Price",
  "Date",
  "Quantity",
  "Status",
];

const OrderDetail = ({ params }: { params: any }) => {
  const id = params.details;
  const { data }: { data?: any } = useGetSingleOrderQuery(id);
  const orderData = data?.data;
  const formatedDate = dateFormater(orderData?.createdAt);

  return (
    <Card
      title='Order Detail'
      extra={
        <div className={style.sercheAndPrint}>
          <Select
            placeholder='Status'
            allowClear
            options={[
              { value: "ordered", label: "Ordered" },
              { value: "rejected", label: "Ordered" },
            ]}
            style={{ width: 200 }}
          />
          <ButtonGroup>
            <Button type='primary'>Save</Button>
            <Button type='dashed'>
              <ImPrinter />
            </Button>
          </ButtonGroup>
        </div>
      }>
      <div className={style.orderInfo}>
        <div
          style={{
            display: "flex",
            padding: 20,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
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
          }}>
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
            gap: 20,
          }}>
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
            }}>
            <BsFillPersonFill />
          </div>
          <div>
            <h3>Customer</h3>
            <p>John De</p>
            <p>Johnde@email.com</p>
            <p>+880 14524 57412</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
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
            }}>
            <FaTruckLoading />
          </div>
          <div>
            <h3>Order Info</h3>
            <p>Shipping: Fargo express</p>
            <p>Pay method: card</p>
            <p>Status: new</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
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
            }}>
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
          </div>
        </div>
      </div>
      <div className={style.tableAndCommentBoxDiv}>
        <div className={style.orderTable}>
          <OrderDetailsTable />
        </div>
        <div>
          <TextArea
            style={{ marginBottom: 20 }}
            rows={4}
            placeholder='maxLength is 6'
            maxLength={6}
          />
          <Button>Save Note</Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderDetail;
