import { ENUM_PRODUCT_STATUS } from "@/config/constants/product";

export interface ProductDataType {
    _id: string;
    productName: string;
    image?: { avatar?: string; avatar_public_url?: string };
    price: number;
    quantity?: number;
    inStock: boolean;
    status: 'pending' | 'active' | 'restrict';
}

export const productData: ProductDataType[] = [
    {
        _id: '10',
        image: { avatar: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533' },
        productName: 'T shirt one',
        price: 3200,
        inStock: true,
        status: 'pending',
    },
    {
        _id: '1',
        image: { avatar: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533' },
        productName: 'T shirt one',
        price: 3200,
        inStock: false,
        status: 'active',
    },
    {
        _id: '2',
        image: { avatar: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533' },
        productName: 'T shirt one',
        price: 3200,
        inStock: true,
        status: 'restrict',
    },
    {
        _id: '3',
        image: { avatar: 'https://www.cloudlift.app/cdn/shop/products/product.jpg?v=1615224393&width=533' },
        productName: 'T shirt one',
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

export const productItemSort = [
    {
        value: 'asc',
        label: 'ASC',
    },
    {
        value: 'desc',
        label: 'DESC',
    },
];

export const productItemSortPage = [
    {
        value: 4,
        label: 4,
    },
    {
        value: 10,
        label: 10,
    },
    {
        value: 20,
        label: 20,
    },
    {
        value: 30,
        label: 30,
    },
    {
        value: 40,
        label: 40,
    },
    {
        value: 50,
        label: 50,
    },
];