import React from 'react';
import style from "./static/dashboard.module.css";
import { FaArrowUp } from "react-icons/fa";

const data=[
    {
        id:1,
        title:"Backpack",
        inc_selling:"20%",
        item_sold:6
    },
    {
        id:2,
        title:"T-shirt",
        inc_selling:"50%",
        item_sold:10
    },
    {
        id:3,
        title:"Suetar",
        inc_selling:"80%",
        item_sold:12
    },
    {
        id:4,
        title:"Coat",
        inc_selling:"90%",
        item_sold:15
    },
    {
        id:5,
        title:"Blazer",
        inc_selling:"50%",
        item_sold:8
    },
    {
        id:6,
        title:"Trouser",
        inc_selling:"80%",
        item_sold:9
    },
    {
        id:7,
        title:"Jeans",
        inc_selling:"40%",
        item_sold:11
    },
    {
        id:8,
        title:"Neckless",
        inc_selling:"20%",
        item_sold:2
    }
]
const TopItems = () => {
    return (
        <div className={`${style.sales_report} ${style.bg_white}`}>
            <h3 className={style.sales_head}>Top Categories</h3>
            <div>
                {
                    data.map((item)=>(
                        <div key={item.id} className={style.categories}>
                            <span className={style.cat_name}>{item.title}</span>
                            <span className={style.cat_sold}>{item.item_sold}</span>
                            <span className={style.cat_inc}>{item.inc_selling}
                            <span className={style.icon_arrow}>{<FaArrowUp/>}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TopItems;