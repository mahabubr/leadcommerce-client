import { removeFromCart, updateCart } from "@/redux/product/cartSlice";
import style from "./CartItemCard.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItemCard = ({ data }: any) => {
    const {
        _id,
        image,
        productName,
        quantity,
        orderQuantity,
        oneQuantityPrice,
        perProductPrice
    } = data;

    const dispatch = useDispatch();

    const updateCartItem = (e: any, key: any) => {
        let payload = {
            key,
            val: key === "orderQuantity" ? parseInt(e.target.value) : e.target.value,
            _id: data._id,
        };
        dispatch(updateCart(payload));
    };

    return (
        <div className={style.cartContainer}>
            <div className={style.cartContainerImage}>
                <Link
                    href={`/product/${_id}`}
                >
                    <Image src={image?.avatar ? image?.avatar : '/preview.jpg'}
                        alt={productName} width={40} height={40} />
                </Link>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <div className={style.cartContainerName}>
                    <p>{productName}</p>
                    <p>Unit Price:${oneQuantityPrice}</p>
                    <div style={{ display: 'flex', gap: '5px', marginTop: '2px' }}>
                        <div>Quantity:</div>
                        <select
                            onChange={(e) => updateCartItem(e, "orderQuantity")}
                        >
                            {Array.from({ length: quantity }, (_, i) => i + 1).map((q, i) => {
                                return (
                                    <option key={i} value={q} selected={orderQuantity === q}>
                                        {q}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className={style.cartContainerRight}>
                    <p>price:${perProductPrice}</p>
                    <RiDeleteBin6Line
                        onClick={() => dispatch(removeFromCart({ _id: data._id }))}
                        className={style.cartItemsDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;
