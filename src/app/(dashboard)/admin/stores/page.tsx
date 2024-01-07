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
      <Card title="All Stores" style={{ boxShadow: "3px 3px 15px #ddd" }}>
        <Input
          size="middle"
          placeholder="Search Pages"
          suffix={<CiSearch />}
          allowClear
          onChange={(e) => setSearch(e.target.value)}
        />
      </Card>

      <div className={style.container}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {stores?.length > 0
            ? stores?.map((store: any) => (
                <StoreCard key={store._id} store={store} />
              ))
            : "Not Store Found"}
        </div>
        <div style={{ marginTop: 50, display: "flex", justifyContent: "end" }}>
          <Pagination
            defaultCurrent={1}
            total={meta?.total}
            onChange={handlePagination}
            pageSizeOptions={["5", "10", "20"]}
            showSizeChanger
          />
        </div>
      </div>
    </>
  );
};

export default Stores;
