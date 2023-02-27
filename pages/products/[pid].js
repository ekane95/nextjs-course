import { Fragment } from "react";
import fs from 'fs';
import path from 'path';

function ProductDetailPage(props) {

    const { loadedProduct } = props;

    if (!loadedProduct) {
        return <p>...Loading</p>;
    }

    return <Fragment>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
    </Fragment>
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticPaths() {

    const data = await getData();

    const ids = data.products.map(product => product.id); //ids array
    const pathsWithParams = ids.map(id => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    const data = await getData();
    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export default ProductDetailPage;