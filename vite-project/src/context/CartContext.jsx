import {createContext, useState} from 'react';

export const cartContext=createContext(false);

export function CartProvider({children}){

    const [cart, setCart]=useState([]);

    const addItem = (item) => {
        
        setCart([...cart, item]);
}

//removeItem, clearCart, isInCart

return (
    <CardContext.Provider value={[cart, setCart, addItem]}>
        {children}
    </CardContext.Provider>
)
}