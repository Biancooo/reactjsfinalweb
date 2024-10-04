import { useEffect, useState } from 'react';
import { getProducts, getCategory } from '../../asyncMock';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        console.log("categoria: ",category)
        if(category){
            const productosFiltrados = getCategory(category)
            console.log("test",productosFiltrados)
            setProducts(productosFiltrados)
        }
        else{
        getProducts.then((data) => setProducts(data));}
    }, [category]);

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