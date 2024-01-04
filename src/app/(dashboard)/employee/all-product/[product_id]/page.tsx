
const page = ({ params }: { params: { product_id: string } }) => {
    const id = params.product_id;

    return <>
        <h1>product id: {id}</h1>
    </>;
};

export default page;