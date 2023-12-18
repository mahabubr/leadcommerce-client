'use client';
import React from 'react';
import CustomTable from '../ui/CustomTable';
import style from "./static/dashboard.module.css";
import { find_text_color } from '@/Helper/CommonFunction';
import { OrderStatusType } from '@/Helper/utils';

const data=[
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'cancelled'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'Pending'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
    {
        orderId:2535,Product:"Dummy Name",unit:1,date:'Oct 20, 2018',cost:'230',status:'completed'
    },
]
const thead=['Order Id','Product Name','Unit','Date','Cost','Status']
const Orders = () => {
   
    return (
        <div className={style.orders}>
            <h3 className={style.sales_head}>Recent Orders</h3>
            <table className={style.table}>
                <tbody className={style.tbody}>
                  <tr className={style.thead}>
                        {thead.map((item)=>(
                            <th className={style.th} key={item}>{item}</th>
                        ))}
                    </tr>
                    {data.map((item,i)=>(
                        <tr key={i} className={style.tr}>
                            <td className={style.td}>{item.orderId}</td>
                            <td className={style.td}>{item.Product}</td>
                            <td className={style.td}>{item.unit}</td>
                            <td className={style.td}>{item.date}</td>
                            <td className={style.td}>{item.cost}</td>
                            <td style={{color:find_text_color(item.status as OrderStatusType)}} className={style.td}>{item.status}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
};

export default Orders;