/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Input, Divider, Flex, Button, TabsProps, Tabs } from "antd";
import { Image } from "antd";
import style from "./order.module.css";
import Search from "antd/es/input/Search";
import { SizeType } from "antd/es/config-provider/SizeContext";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Description",
    children:
      "Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius",
  },
  {
    key: "2",
    label: "Reviews (3)",
    children:
      "Content of Tab Pane 2 Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius",
  },
  {
    key: "3",
    label: "SSS",
    children:
      "Content of Tab Pane 3 Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius",
  },
];

const Orders: React.FC = () => {
  const [size, setSize] = useState<SizeType>("large"); // default is 'middle'

  return (
    <>
      <div className={style.container}>
        <div className={style.mainContent}>
          <div className={style.mainFilter}>
            <div className={style.filterOne}>
              <h3>Product Details</h3>
            </div>
            <div className={style.filterTwo}>
              <Input placeholder="Basic usage" size="large" />
            </div>
          </div>
          <Divider />
          <div className={style.productContentr}>
            <div className={style.leftContent}>
              <Image
                className={style.productImg}
                width={500}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div className={style.rightContent}>
              <p>Techonology Product</p>
              <br />
              <h1>Ultimate Ears Wonderboom</h1>
              <div className={style.inStock}>
                <p className={style.inStockText}>inStock</p>
              </div>
              <br />
              <p>lorem100 </p>
              <br />
              <h5>Star</h5>
              <br />
              <p>Frature :</p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, cum! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nostrum, cum!
              </p>
              <br />
              <div className={style.inputSearch}>
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* duplicate */}
      <div className={style.container}>
        <div className={style.mainContent}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default Orders;
