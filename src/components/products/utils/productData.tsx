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