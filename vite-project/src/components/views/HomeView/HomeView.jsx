import { useEffect, useState } from "react"
import { getProductos } from "../../../../asyncMock";

export default function HomeView(){

    const [products, setProducts]=useState([]);

    useEffect(()=>{

        const productos = getProductos();
        console.log("testeo",productos)
        setProducts(productos);
    },[]);
    
    return (<>
    {products.map(producto=> <p>`${producto.title}`</p>)}
    </>)
}