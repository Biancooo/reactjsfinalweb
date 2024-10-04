import { createContext, useEffect, useState } from 'react';
import { getProds } from '../../../asyncMock';

export const ProductsContext = createContext(false);

export function ProductsProvider({ childer }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProds().then((data) => setProducts(data));
    }, []);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}