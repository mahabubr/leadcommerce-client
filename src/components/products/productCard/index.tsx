/* eslint-disable @next/next/no-img-element */
import { Card, Button, Rate } from "antd";
import style from "./product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/product/cartSlice";
import { fixedFloatValue } from "@/Helper/utils";

function Rating({ value }: { value: number }) {
  return <Rate className="mx-auto" disabled defaultValue={value} />;
}

export default function ProductCard({ product }: { product: any }) {
  const dispatch = useDispatch();

  const { _id, image, productName, category, price, averageRating } = product;
  return (
    <Card
      className={style.productContainer}
      cover={
        <div className={style.productImageContainer}>
          <img
            className={style.productImage}
            src={image?.avatar ? image?.avatar : "/preview.jpg"}
            alt="product Image"
          />
        </div>
      }
    >
      <p className={style.productName}>{productName}</p>
      <div>
        <div className={style.productPCA}>
          <p className={style.productCategory}>{category}</p>
          <p className={style.productPrice}>${fixedFloatValue(price)}</p>
        </div>
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
    </Card>
  );
}
