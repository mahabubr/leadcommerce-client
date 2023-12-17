import { ENUM_PRODUCT_STATUS } from "@/config/constants/product";

export interface ProductDataType {
    _id: string;
    title: string;
    image: string;
    price: number;
    inStock: boolean;
    status: 'pending' | 'active' | 'restrict';
}

export const productData: ProductDataType[] = [
    {
        _id: '10',
        image: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533',
        title: 'T shirt one',
        price: 3200,
        inStock: true,
        status: 'pending',
    },
    {
        _id: '1',
        image: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533',
        title: 'T shirt one',
        price: 3200,
        inStock: false,
        status: 'active',
    },
    {
        _id: '2',
        image: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533',
        title: 'T shirt one',
        price: 3200,
        inStock: true,
        status: 'restrict',
    },
    {
        _id: '3',
        image: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533',
        title: 'T shirt one',
        price: 3200,
        inStock: false,
        status: 'pending',
    },
];

export const productItems = [
    {
        value: '1',
        label: 'Item 1',
    },
    {
        value: '2',
        label: 'Item 2',
    },
    {
        value: '3',
        label: 'Item 3',
    },
];

export const productItemStatus = [
    {
        value: ENUM_PRODUCT_STATUS.PENDING,
        label: ENUM_PRODUCT_STATUS.PENDING,
    },
    {
        value: ENUM_PRODUCT_STATUS.ACTIVE,
        label: ENUM_PRODUCT_STATUS.ACTIVE,
    },
    {
        value: ENUM_PRODUCT_STATUS.RESTRICT,
        label: ENUM_PRODUCT_STATUS.RESTRICT,
    },
];