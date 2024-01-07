import {
  AppstoreAddOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Modal } from "antd";
import React, { useState } from "react";

const UserCard = ({ user }: { user: any }) => {
  console.log(user);
  const { full_name, email, image, phone, country, address } = user;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        style={{
          height: "120px",
          minWidth: "400px",
          // border: "1px solid red",
          display: "flex",
          padding: "1vw",
          position: "relative",
          borderRadius: "8px",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        }}>
        <AppstoreAddOutlined
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
            fontSize: "16px",
          }}
          onClick={showModal}
        />
        <div
          style={{
            // border: "1px solid red",
            display: "flex",
            gap: "5px",
            width: "100%",
          }}>
          <div
            style={{
              // border: "1px solid red",
              width: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {image ? (
              <Avatar size={60} src={image?.avatar} />
            ) : (
              <Avatar size={60} icon={<UserOutlined />} />
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}>
            <div
              className='text'
              style={{
                // border: "1px solid red",
                flex: "1",
                padding: "10px",
                fontSize: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}>
              <h5>{full_name}</h5>
              <h6>
                <MailOutlined />
                <span style={{ marginLeft: "5px" }}>{email}</span>
              </h6>
              <h6>
                <PhoneOutlined />
                <span style={{ marginLeft: "5px" }}>{phone}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={style.userGrid}>
          {adminData?.map((admin: any) => (
            <UserCart key={admin._id} admin={admin} />
          ))}
        </div> */}
      <Modal
        // title='Basic Modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <div
          style={{
            display: "flex",
            gap: "1vw",
            width: "100%",
            height: "250px",
          }}>
          <div
            className='photo'
            style={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            {image ? (
              <Avatar size={60} src={image?.avatar} />
            ) : (
              <Avatar size={60} icon={<UserOutlined />} />
            )}
            <h2>{full_name}</h2>
            <h3>{email}</h3>
          </div>
          <div
            className='content'
            style={{
              flex: "1",
              padding: "1vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "7px",
            }}>
            <h1>Contact Details</h1>
            <h3>Email</h3>
            <h4>{email}</h4>
            <h3>Phone Number</h3>
            <h4>{phone}</h4>
            <h3>Country</h3>
            <h4>{country}</h4>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserCard;
