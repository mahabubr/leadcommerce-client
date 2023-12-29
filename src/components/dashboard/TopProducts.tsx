/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./static/dashboard.module.css";
import Image from "next/image";

const TopProducts = ({ data }: { data: any }) => {
  return (
    <div className={`${style.sales_report} ${style.bg_white}`}>
      <h3 className={style.sales_head}>Top Products</h3>
      <div className={style.top_products}>
        {data?.ordersChart?.topProduct?.map((item: any) => (
          <div className={style.product_cards} key={item.id}>
            <figure className={style.product_cards_figure}>
              <img
                className={style.product_img}
                src={item.image?.avatar}
                alt={item.productName}
              />
            </figure>
            <div className={style.product_data}>
              <h5 className={style.product_h5}>
                {item?.productName}
                <span className={style.sales}>{item.quantity} sales</span>
              </h5>
              <p className={style.product_para}>{item?.fullDescription}</p>
              <div className={style.price}>
                <span className={style.p_price}>${item.price}</span>
                {/* <span className={style.p_price}>Quantity: {item.quantity}</span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
