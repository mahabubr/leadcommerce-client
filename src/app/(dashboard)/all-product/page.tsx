"use client";

import { Collapse, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import style from "./product.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";
import { useState } from "react";
import { useGetAllProductsQuery } from "@/redux/product/productApi";
import ProductCard from "@/components/products/productCard";

const { Search } = Input;

const Orders = () => {
    const router = useRouter();


    // * Filtering and Searching
    const query: any = {};

    // * state declaration
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentLimit, setCurrentLimit] = useState<number>(4);
    const [currentSortOrder, setCurrentSortOrder] = useState<"desc" | "asc">(
        "asc"
    );
    const [search, setSearch] = useState<string>("");
    const { data }: { data?: any } = useGetAllProductsQuery({
        limit: currentLimit,
        page: currentPage,
        product_status: "active",
        sortOrder: currentSortOrder,
        searchTerm: search,
    });
    const ProductData = data?.data;

    console.log(ProductData)

    // * PageLimit Change
    const handlePagelimitChange = (value: any) => {
        setCurrentLimit(value);
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
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    justifyContent: "center"
                }}>
                    {ProductData &&
                        ProductData?.map((product: any) => (
                            <ProductCard key={product._id} product={product}></ProductCard>
                        ))}
                </div>

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
        </div >
    );
};

export default Orders;
