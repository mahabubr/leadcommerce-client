import { Button, Form, Input, Modal, message, notification } from "antd";
import CartItemCard from "./CartItemCard";
import style from "./CartItemCard.module.css";
import { useState } from "react";
import { useCreateOrderMutation } from "@/redux/order/orderApi";
import { useDispatch } from "react-redux";
import { clearFromCart } from "@/redux/product/cartSlice";

const initialData = {
  house_no: "",
  road_no: "",
  area: "",
  district: "",
  country: "",
};

const CartList = ({ cartItems, total }: { cartItems: any; total: number }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [addOrder] = useCreateOrderMutation();
  const [api, contextHolder] = notification.useNotification();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: any) => {
    const orderProductList = cartItems.map((item: any) => ({
      product_id: item._id,
      product_name: item.productName,
      product_quantity: item.orderQuantity,
      product_price: item.price,
    }));

    const orderReq = {
      order_product_list: orderProductList,
      amount: total,
      total_amount: total,
      shipment_address: values,
    };
    console.log(orderReq);

    try {
      setIsLoading(true);
      await addOrder({ data: orderReq }).then((res: any) => {
        if (res?.data?.success) {
          message.success(res?.data?.message);
          form.setFieldsValue(initialData);
          dispatch(clearFromCart());
          api.success({
            message: `${res?.data?.message}`,
            description: <div>The Order is successfully Created</div>,
            placement: "bottomLeft",
          });
          setIsLoading(false);
        } else {
          setIsLoading(false);
          api.error({
            message: `${res?.data?.message}`,
            description: <div>somethings wrong! Please try again later.</div>,
            placement: "bottomLeft",
          });
        }
      });
    } catch (error) {
      setIsLoading(false);
      message.error("Not able to order");
    }
  };

  const onFinishFailed = async (values: any) => {};

  return (
    <>
      {contextHolder}
      <div>
        <div>
          {cartItems.map((item: any) => (
            <CartItemCard key={item.id} data={item} />
          ))}
        </div>
        {cartItems.length > 1 && (
          <div className={style.totalPrice}>
            <p>Total Price:${total}</p>
          </div>
        )}
        {cartItems.length > 0 && (
          <Button
            type="primary"
            onClick={showModal}
            className={style.checkoutButton}
          >
            Checkout
          </Button>
        )}
      </div>
      <Modal
        title="Order Confirmation"
        open={isModalOpen}
        centered
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          className=""
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div>
            <label style={{ fontSize: "14px" }}>House No</label>
            <Form.Item
              name="house_no"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: "House No is required",
                },
              ]}
            >
              <Input
                style={{
                  marginTop: "1px",
                  width: "100%",
                  height: "30px",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
          </div>

          <div style={{ marginTop: "4px" }}>
            <label style={{ fontSize: "15px" }}>Road No</label>
            <Form.Item
              style={{ marginBottom: "4px" }}
              name="road_no"
              rules={[
                {
                  required: true,
                  message: "Please input Road No",
                },
              ]}
            >
              <Input
                style={{
                  marginTop: "1px",
                  width: "100%",
                  height: "30px",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
          </div>

          <div style={{ marginTop: "4px" }}>
            <label style={{ fontSize: "15px" }}>Area</label>
            <Form.Item
              style={{ marginBottom: "4px" }}
              name="area"
              rules={[
                {
                  required: true,
                  message: "Please input Area No",
                },
              ]}
            >
              <Input
                style={{
                  marginTop: "1px",
                  width: "100%",
                  height: "30px",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
          </div>
          <div style={{ marginTop: "4px" }}>
            <label style={{ fontSize: "15px" }}>District</label>
            <Form.Item
              style={{ marginBottom: "4px" }}
              name="district"
              rules={[
                {
                  required: true,
                  message: "Please input District",
                },
              ]}
            >
              <Input
                style={{
                  marginTop: "1px",
                  width: "100%",
                  height: "30px",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
          </div>

          <div style={{ marginTop: "4px" }}>
            <label style={{ fontSize: "15px" }}>Country</label>
            <Form.Item
              style={{ marginBottom: "4px" }}
              name="country"
              rules={[
                {
                  required: true,
                  message: "Please input Country",
                },
              ]}
            >
              <Input
                style={{
                  marginTop: "1px",
                  width: "100%",
                  height: "30px",
                  borderRadius: "4px",
                }}
              />
            </Form.Item>
          </div>

          <div
            style={{ width: "100%", marginTop: "20px", textAlign: "center" }}
          >
            <Form.Item>
              <Button
                style={{
                  width: "100%",
                  borderRadius: "2px",
                  textAlign: "center",
                  margin: "auto",
                  fontSize: 14,
                  fontWeight: "500",
                  height: "36px",
                  boxShadow: "2px 2px 8px 3px rgba(0, 0, 0, 0.2)",
                }}
                type="primary"
                htmlType="submit"
              >
                Add Order
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default CartList;
