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
      <div>
        <Card>
          <div
            className={style.searchField}
            // style={{
            //   // display: "flex",
            //   justifyContent: "space-between",
            //   alignItems: "center",
            //   border: "1px solid red",
            // }}
          >
            {/* First section */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Input
                size='middle'
                placeholder='Search Pages'
                suffix={<CiSearch />}
                allowClear
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Second section */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Select
                placeholder='Categories'
                allowClear
                options={[
                  { value: "ordered", label: "Ordered" },
                  { value: "rejected", label: "Rejected" },
                ]}
                style={{ maxWidth: 250 }}
              />
              <Button type='primary'>Add Store</Button>
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
          style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
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
