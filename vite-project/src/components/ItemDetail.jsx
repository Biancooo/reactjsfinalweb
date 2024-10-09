import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';

const ItemDetail = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const productFiltred = getProduct(id)
        setProduct(productFiltred);
    //getProducts.then((data) => setProduct(data));
    }, [id]);

    return (

    <>
        <article style={{ border: '1px solid white', padding: 10 }}>
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <p>$ {product.price}</p>
            <button>
                <Link to={`/item/${product.id}`}>Detalles</Link>
                </button>
                </article>
                </>
    )
} 

export default ItemDetail