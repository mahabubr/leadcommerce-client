"use client";

import { Collapse, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import style from "./product.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";

import { useState } from "react";
import { useGetAllOrderQuery } from "@/redux/order/orderApi";

const { Search } = Input;

const Orders = () => {
    const router = useRouter();


    // * Filtering and Searching
    const query: any = {};

    // * state declaration
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(4); // limit
    const [sortBy, setSortBy] = useState("order_code");
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchTerm, setSearchTerm] = useState("");
    const [orderCode, setOrderCode] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    query["limit"] = limit;
    query["page"] = page;

    query["sortBy"] = sortBy;
    query["sortOrder"] = sortOrder;
    query["searchTerm"] = searchTerm;

    if (orderCode) {
        query["order_code"] = orderCode;
    }
    if (orderStatus) {
        if (orderStatus === "all") {
            setOrderStatus("");
        }

        query["order_status"] = orderStatus;
    }
    const { data }: { data?: any } = useGetAllOrderQuery({ ...query });
    const orderData = data?.data;

    // * PageLimit Change
    const handlePagelimitChange = (value: any) => {
        setLimit(value);
    };

    // * Filter 🚀🚀🚀
    // * SearchBy Order ID
    const onSearch = (value: any, _e: any, info: any) => {
        setPage(1);
        setOrderCode(value);
    };
    // * Order Status
    const handleChange = (value: string) => {
        setPage(1);
        setOrderStatus(value);
    };
    // * routing action
    const handleRouteUpdate = (_id: string) => router.push(`/product/${_id}`);
    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.mainFilter}>
                    <div className={style.filterOne}>
                        <Input
                            size="middle"
                            placeholder="Search products..."
                            suffix={<CiSearch />}
                            allowClear
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className={style.filterTwo}>
                        <Select
                            onChange={handlePagelimitChange}
                            style={{ width: "100px", textTransform: "capitalize" }}
                            options={productItemSortPage}
                            defaultValue={productItemSortPage[0]}
                        // defaultValue={selectedStatus}
                        />
                    </div>
                </div>

                {/* //TODO: product listing and pagination */}
            </div>


            <Collapse
                className={style.sideContent}
                collapsible="header"
                defaultActiveKey={["43"]}
                expandIconPosition="right"
                style={{
                    backgroundColor: "white",
                    border: "1px solid #f0f0f0",
                }}
                bordered={false}
                items={[
                    {
                        key: "43",
                        label: <div style={{ fontSize: 18, fontWeight: "bold" }}>Orders Cart</div>,
                        children: <div >
                            {/* //TODO: product cart */}


                        </div>,
                    },
                ]}
            />
        </div>
    );
};

export default Orders;
