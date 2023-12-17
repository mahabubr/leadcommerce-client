import TopSingleCard from '@/components/ui/dashboard/topSingleCard';
import React from 'react';
import {CloudUploadOutlined, DollarOutlined, UserAddOutlined} from "@ant-design/icons";
import { paths } from '@/paths/paths';
import style from "./static/dashboard.module.css";
import SalesReport from '@/components/ui/dashboard/SalesReport';
import OrdersPieChart from '@/components/ui/dashboard/OrdersPieChart';

const DashboardPage = () => {
    return (
        <div className={style.container}>
            <div className={style.summary}>
                <TopSingleCard total='500' text='Daily Signups' icon={<UserAddOutlined />}/>
                <TopSingleCard link={paths.orders} total='40' text='Daily Orders' icon={<UserAddOutlined />}/>
                <TopSingleCard total='$1000' text='Daily Revenue' icon={<DollarOutlined/>}/>
                <TopSingleCard link={paths.products} total='30' text='Daily added product' icon={<CloudUploadOutlined />}/>
            </div>
            <div className={style.sales_report}>
                <SalesReport/>
                <OrdersPieChart/>
            </div>
        </div>
    );
};

export default DashboardPage;