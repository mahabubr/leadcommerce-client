/* eslint-disable @next/next/no-img-element */
"use client";

import StoreCard from "@/components/store/StoreCard";
import Loader from "@/components/ui/Loader";
import { useGetAllStoresQuery } from "@/redux/store/storeApi";
import { Button, Card, Input, Pagination, Select } from "antd";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import style from "./static/store.module.css";
const Stores = () => {
  const [pagPage, setPagPage] = useState(1);
  const [pagSize, setPagSize] = useState(10);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetAllStoresQuery({
    limit: pagSize,
    page: pagPage,
    sortOrder: "desc",
    searchTerm: search,
  });

  if (isLoading) {
    return <Loader />;
  }
  //@ts-ignore
  const stores = data?.data;
  //@ts-ignore
  const meta = data?.meta;

  const handlePagination = (page: any, size: any) => {
    setPagPage(page);
    setPagSize(size);
  };

  return (
    <>
      {/* <div
        style={{
          display: "flex",
          backgroundColor: "white",
          padding: "1vw",
          borderRadius: "8px",
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}>
        <h3>All Orders</h3>
        <Input
          size='middle'
          placeholder='Search Pages'
          suffix={<CiSearch />}
          allowClear
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className={style.container}>
        <Card>
          <div className={style.searchField}>
            {/* First section */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <h2>All Stores</h2>
            </div>

            {/* Second section */}
            <div className={style.secondSection}>
              <Input
                size='middle'
                placeholder='Search Pages'
                suffix={<CiSearch />}
                allowClear
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Select
                placeholder="Categories"
                allowClear
                options={[
                  { value: "ordered", label: "Ordered" },
                  { value: "rejected", label: "Rejected" },
                ]}
                style={{ minWidth: 188 }}
              />
              <Button type="primary">Add Store</Button>  
               */}
            </div>
          </div>
        </Card>
        <div className={style.storeGrid}>
          {stores?.length > 0
            ? stores?.map((store: any) => (
                <StoreCard key={store._id} store={store} />
              ))
            : "Not Store Found"}
        </div>
        <Card
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}>
          <Pagination
            defaultCurrent={1}
            total={meta?.total}
            onChange={handlePagination}
            pageSizeOptions={["5", "10", "20"]}
            showSizeChanger
          />
        </Card>
      </div>
    </>
  );
};

export default Stores;
