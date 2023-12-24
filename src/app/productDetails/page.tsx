/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { Input, Divider, Flex, Button, TabsProps, Tabs } from "antd";
import { Image } from "antd";
import style from "./order.module.css";
import Search from "antd/es/input/Search";
import { SizeType } from "antd/es/config-provider/SizeContext";
import Children from "./Children/Children";
import Children1 from "./Children/Children1";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Description",
    children:
      "Content of Tab Pane 2 Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus consectetur. Maecenas facilisis eros ac felis mattis, egetauctor sapien varius",
    // children: <Children />,
  },
  {
    key: "2",
    label: "Reviews (3)",
    children: <Children1 />,
  },
  {
    key: "3",
    label: "SSS",
    children: <Children />,
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
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                saepe corporis? Repellat sequi quod porro iusto dolorum tenetur?
                Quis sit hic ut quae, a vitae soluta laudantium obcaecati
                reiciendis vero doloremque beatae, libero ipsa perferendis
                quisquam ratione, atque fuga consectetur. Saepe tempora possimus
                aperiam voluptas at optio explicabo eligendi natus voluptatum
                impedit odio itaque totam odit, necessitatibus neque labore
                aliquam autem. Quae atque odio possimus asperiores eius ipsam
                tempore explicabo temporibus libero ad nobis deserunt, quas
                voluptas quia hic. Fugit expedita sapiente dolore, eius
                reprehenderit eaque dicta deleniti distinctio omnis perferendis
                quia. Asperiores debitis esse maiores quo nam vitae expedita?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                saepe corporis? Repellat sequi quod porro iusto dolorum tenetur?
                Quis sit hic ut quae, a vitae soluta laudantium obcaecati
                reiciendis vero doloremque beatae, libero ipsa perferendis
                quisquam ratione, atque fuga consectetur. Saepe tempora possimus
                aperiam voluptas at optio explicabo eligendi natus voluptatum
                impedit odio itaque totam odit, necessitatibus neque labore
                aliquam autem. Quae atque odio possimus asperiores eius ipsam
                tempore explicabo temporibus libero ad nobis deserunt, quas
                voluptas quia hic. Fugit expedita sapiente dolore, eius
                reprehenderit eaque dicta deleniti distinctio omnis perferendis
                quia. Asperiores debitis esse maiores quo nam vitae expedita?
              </p>
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
