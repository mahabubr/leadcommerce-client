"use client";
import { Button, Card, message } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { CiCalendar } from "react-icons/ci";
import { FaTruckLoading } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import TextArea from "antd/es/input/TextArea";
import { useGetSingleOrderQuery } from "@/redux/order/orderApi";
import { dateFormater } from "@/Helper/dateFormater";
import style from "../order.module.css";
import OrderDetailsTable from "@/components/orderTable/OrderDetailsTable";
import { useReactToPrint } from "react-to-print";
import { useRef, useState } from "react";
import Loader from "@/components/ui/Loader";
import { useAddPaymentMutation } from "@/redux/payment/paymentApi";

const OrderDetail = ({ params }: { params: any }) => {
  const id = params.details;
  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetSingleOrderQuery(id);
  console.log(data)
  const orderData = data?.data;
  const formatedDate = dateFormater(orderData?.createdAt);

  const products = orderData?.order_product_list;

  const componentRef = useRef(null);
  const [paymentDescription, setPaymentDescription] = useState("");

  const [addPayment] = useAddPaymentMutation();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  if (isLoading) {
    return <Loader />;
  }

  const handlePayment = () => {
    const submitData = {
      total_amount: data?.data?.amount,
      order_id: id,
      payment_status: "completed",
      description: paymentDescription,
    };

    addPayment(submitData).then((res: any) => {
      if (res?.data?.success) {
        message.success(res?.data?.message);
      }
    });
  };

  return (
    <div className={style.spContainer}>
      <Card
        title="Order Detail"
        ref={componentRef}
        extra={
          <div className={style.sercheAndPrint}>
            <ButtonGroup>
              <Button onClick={handlePrint} type="primary">
                Invoice
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
              <p>Pay method: card</p>
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
            </div>
          </div>
        </div>
        <div className={style.tableAndCommentBoxDiv}>
          <div className={style.orderTable}>
            <OrderDetailsTable
              products={products}
              total_price={orderData?.total_amount}
              isLoading={isLoading}
            />
          </div>
          <div style={{ width: "60%" }}>
            <TextArea
              style={{
                marginBottom: 20,
                boxShadow: "3px 3px 8px #ddd",
              }}
              rows={4}
              placeholder="Make some lines"
              maxLength={200}
              onChange={(e) => setPaymentDescription(e.target.value)}
            />
            <Button
              onClick={() => handlePayment()}
              type="primary"
              style={{ width: "100%" }}
            >
              Make Payment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetail;
