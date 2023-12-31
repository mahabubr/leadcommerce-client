import { removeFromCart, updateCart } from "@/redux/product/cartSlice";
// import style from "./CartItemCard.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const CartItemCard = ({ data }: any) => {
    const {
        _id,
        image,
        productName,
    } = data;

    const dispatch = useDispatch();

    // const updateCartItem = (e: any, key: any) => {
    //     let payload = {
    //         key,
    //         val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
    //         _id: data._id,
    //     };
    //     dispatch(updateCart(payload));
    // };

    return (
        <div>
            <Link
                href={`/products/${_id}`}
            >
                <Image src={image?.avatar} alt={productName} width={120} height={120} />
            </Link>

        </div>
    );
};

export default CartItemCard;
