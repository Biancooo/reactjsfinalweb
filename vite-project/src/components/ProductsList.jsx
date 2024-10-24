import { useEffect, useState, } from 'react';
import { getProducts, getCategory } from '../components/firebase/firebase.js';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const {category} = useParams();
    useEffect(() => {
        console.log("categoria: ",category)
        if(category){
            console.log("entreIf")
            const fetchDeCategoria = async()=>{
                const productosFiltrados = await getCategory(category)
                console.log("productosFiltrados",productosFiltrados)
                console.log("test",productosFiltrados)
                setProducts(productosFiltrados)
            }
            fetchDeCategoria()
        }
        else{
            console.log("entre else")
            const fetchDeProductos = async() =>{
            const productos = await getProducts()
            console.log(productos,"productos")
            setProducts(productos);
            }
            fetchDeProductos()
        }}
        , [category]);

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