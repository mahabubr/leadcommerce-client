"use client";

import React, { useState } from "react";
import { Input, Divider, Tabs, Tag, Checkbox, ColorPicker } from "antd";
import { Image } from "antd";
import style from "./productSingle.module.css";
import Search from "antd/es/input/Search";
import Children1 from "@/components/products/Children/Children2";
import Children from "@/components/products/Children/Children1";
import { useGetAProductsQuery } from "@/redux/product/productApi";
import Loader from "@/components/ui/Loader";

const ProductSingle = ({ params }: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const { data, isLoading } = useGetAProductsQuery({ id: params?.product_id });

  if (isLoading) return <Loader />;
  //@ts-ignore
  const product = data?.data;

  const tabs = [
    {
      key: "1",
      label: "Description",
      content: product?.fullDescription,
    },
    {
      key: "2",
      label: "Reviews (3)",
      content: <Children1 />,
    },
  ];

  const handleTabChange = (key: any) => {
    setActiveTab(key);
  };

  return (
    <div className={style.container}>
      <div className={style.mainContent}>
        <div className={style.productContent}>
          <div className={style.leftContent}>
            <Image
              className={style.productImg}
              src={product?.image?.avatar}
              alt="Product Image"
            />
          </div>
          <div className={style.rightContent}>
            <Tag color="geekblue">{product?.status}</Tag>
            <h2 style={{ marginTop: 10 }}>{product?.productName}</h2>
            <p className={style.productDescription}>
              $ <b>{product?.price}</b>
            </p>
            <p className={style.productDescription}>{product?.description}</p>
            <div
              style={{ marginTop: 5, display: "flex", alignItems: "center" }}
            >
              {product?.size?.map((sz: string) => (
                <Checkbox disabled key={sz}>
                  {sz}
                </Checkbox>
              ))}
              <ColorPicker value={product?.color[0]} allowClear />
            </div>
          </div>
        </div>
        <div className={style.tabsContainer}>
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            className={style.customTabs}
          >
            {tabs.map((tab) => (
              <Tabs.TabPane tab={tab.label} key={tab.key}>
                {tab.content}
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
