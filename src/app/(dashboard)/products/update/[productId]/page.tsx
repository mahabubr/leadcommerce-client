import UpdateProduct from "@/components/products/UpdateProduct";

const page = ({ params }: { params: { productId: string } }) => {
    return <>
        <UpdateProduct productId={params.productId} />
    </>;
};

export default page;
