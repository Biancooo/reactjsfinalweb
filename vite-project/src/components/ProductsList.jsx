import { useEffect, useState } from 'react';
import { getProducts } from '../../../asyncMock';
import ProductCard from './ProductCard';

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
        <section style={{ display: 'flex', gap: 10 }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
    ))}
    </section>
    </>
    );
}