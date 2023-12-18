import React from 'react';
import style from "./static/dashboard.module.css";
import Image from 'next/image';

const data=[
    {
        image:"https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p1.jpg",
        id:1,
        title:"Baby cotton shoes",
        description:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
        price:"520",
        originalPrice:"590",
        sales:"50"
    },
    {
        image:"https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p2.jpg",
        id:2,
        title:"Hoodies for men",
        description:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
        price:"250",
        originalPrice:"300",
        sales:"50"
    },
    {
        image:"https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p3.jpg",
        id:3,
        title:"Long slive t-shirt",
        description:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
        price:"200",
        originalPrice:"250",
        sales:"50"
    },
    {
        image:"https://maraviyainfotech.com/projects/ekka/ekka-v36/ekka-admin/assets/img/products/p3.jpg",
        id:4,
        title:"Long slive t-shirt",
        description:"Statement belting with double-turnlock hardware adds “swagger” to a simple.",
        price:"200",
        originalPrice:"250",
        sales:"50"
    }
]
const TopProducts = () => {
    return (
        <div className={style.sales_report}>
            <h3 className={style.sales_head}>Top Products</h3>
            <div className={style.top_products}>
                {
                    data.map((item)=>(
                        <div className={style.product_cards} key={item.id}>
                            <figure>
                                <img className={style.product_img} src={item.image} alt={item.title}/>
                            </figure>
                            <div className={style.product_data}>
                                <h5 className={style.product_h5}>
                                    {item.title}
                                    <span className={style.sales}>{item.sales} sales</span>
                                </h5>
                                <p className={style.product_para}>
                                    {item.description}
                                </p>
                                <div className={style.price}>
                                    <span className={style.p_price}>${item.price}</span>
                                    <del className={style.o_price}>${item.originalPrice}</del>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopProducts;