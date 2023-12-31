import Image from "next/image";
import Link from "next/link";
import { fixedFloatValue } from "@/Helper/utils";
import { Rate } from "antd";
import style from "./product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/product/cartSlice";

function Rating({ value }: { value: number }) {
    return <Rate className="mx-auto" disabled defaultValue={value} />;
}


export default function ProductCard({ product }: { product: any }) {
    const dispatch = useDispatch();

    const { _id, image, productName, category, price, averageRating } =
        product;
    return (
        <div className={style.productContainer}>
            <Link href={`/product/${_id}`}>
                <div className={style.productImageContainer}>
                    <Image
                        className={style.productImage}
                        src={image?.avatar ? image?.avatar : '/preview.jpg'}
                        alt="product Image"
                        width={250}
                        height={200}
                    ></Image>
                </div>
                <p className={style.productName}>
                    {productName}
                </p>
                <div>
                    <div className={style.productPCA}>
                        <p className={style.productCategory}>
                            {category}
                        </p>
                        <p className={style.productPrice}>
                            ${fixedFloatValue(price)}
                        </p>
                        <div className={style.averageRating}>
                            <Rating value={averageRating}></Rating>
                        </div>
                    </div>
                </div>
            </Link>
            <button onClick={() => {
                dispatch(
                    addToCart({
                        ...product[0],
                        oneQuantityPrice: price,
                    })
                );
            }} className={style.addCartButton}>Add Cart</button>
        </div>
    );
}
