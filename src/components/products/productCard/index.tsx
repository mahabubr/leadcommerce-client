/* eslint-disable @next/next/no-img-element */
import { Card, Button, Rate } from "antd";
import style from "./product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/product/cartSlice";
import { fixedFloatValue } from "@/Helper/utils";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineShareAlt,
  AiFillHeart,
} from "react-icons/ai"; // Import your desired icons
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Rating({ value }: { value: number }) {
  return <Rate className="mx-auto" disabled defaultValue={value} />;
}

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useDispatch();

  const [love, setLove] = useState(true);

  const router = useRouter();

  const { _id, image, productName, category, price, averageRating } = product;

  return (
    <div className={style.productContainer}>
      <div className={style.productImageContainer}>
        <img
          className={style.productImage}
          src={image?.avatar ? image?.avatar : "/preview.jpg"}
          alt="product Image"
        />
        <div className={style.iconContainer}>
          <FaEye
            onClick={() => router.push(`/employee/all-product/${_id}`)}
            className={style.icon}
          />
          {love ? (
            <AiOutlineHeart
              onClick={() => setLove(!love)}
              className={style.icon}
            />
          ) : (
            <AiFillHeart
              onClick={() => setLove(!love)}
              className={style.icon}
            />
          )}
          <AiOutlineShareAlt className={style.icon} />
        </div>
      </div>
      <div style={{ padding: 10, marginBottom: 10 }}>
        <p className={style.productName}>{productName}</p>
        <p className={style.productPrice}>${fixedFloatValue(price)}</p>
      </div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(
            addToCart({
              ...product,
              oneQuantityPrice: price,
            })
          );
        }}
        className={style.addCartButton}
      >
        Add Cart
      </Button>
    </div>
  );
}
