import { useEffect, useState } from "react"
import { getProducts } from "../../firebase/firebase";

export default function HomeView(){

    const [products, setProducts]=useState([]);

    useEffect(()=>{

        const productos = getProducts();
        console.log("testeo",productos)
        setProducts(productos);
    },[]);
    
    return (<>
    {products.map(producto=> <p>`${producto.title}`</p>)}
    </>)
} 