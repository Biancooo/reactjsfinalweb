import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct, getProductos } from '../../../../asyncMock';

export default function ProductView() {
    const [product, setProduct] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setProduct(getProductos());
        console.log(product)
    }, []);

    return (
        <>
        <article style={{ border: '1px solid white', padding: 40 }}>
            <h2>Product Detail</h2>
            <h4>
                {product.title} - {product.category}
                </h4>
                <img src={product.image} alt={product.title} />
                <p>Description: {product.description}</p>
                <p>$ {product.price}</p>
                </article>
                </>
        );
}