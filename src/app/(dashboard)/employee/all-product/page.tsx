"use client";

import { Collapse, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import style from "./product.module.css";
import { productItemSortPage } from "@/components/products/utils/productData";
import { useMemo, useState } from "react";
import { useGetAllProductsQuery } from "@/redux/product/productApi";
import ProductCard from "@/components/products/productCard";
import { useSelector } from "react-redux";
import CartList from "@/components/cart/CartList";
import Loader from "@/components/ui/Loader";
// import CartItemCard from "@/components/cart/CartItemCard";
interface RootState {
  cart: {
    cartItems: any[];
  };
}

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
  const { data, isLoading }: { data?: any; isLoading: boolean } =
    useGetAllProductsQuery({
      limit: currentLimit,
      page: currentPage,
      product_status: "active",
      sortOrder: currentSortOrder,
      searchTerm: search,
    });
  const ProductData = data?.data;

  // * PageLimit Change
  const handlePagelimitChange = (value: any) => {
    setCurrentLimit(value);
  };
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const subTotal = useMemo(() => {
    return cartItems.reduce((total: number, val: any) => {
      if (typeof val === "object" && val !== null && "perProductPrice" in val) {
        return total + parseFloat(val.perProductPrice || 0);
      }
      return total;
    }, 0);
  }, [cartItems]);

  // * routing action
  const handleRouteUpdate = (_id: string) => router.push(`/product/${_id}`);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.container}>
      <div
        className={style.mainContent}
        style={{ boxShadow: "3px 3px 15px #ddd" }}
      >
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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
          }}
        >
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
          boxShadow: "3px 3px 15px #ddd",
        }}
        bordered={false}
        items={[
          {
            key: "43",
            label: (
              <div
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Orders Cart
              </div>
            ),
            children: <CartList cartItems={cartItems} total={subTotal} />,
          },
        ]}
      />
    </div>
  );
};

export default Orders;
