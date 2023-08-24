const { createContext } = require("react");
import { useEffect, useState } from "react";

export const CartContext = createContext({});

export function  CartContextProvider({children}) {
    const ls= typeof window !== 'undefined' ?  window.localStorage : null;
    const defaultProducts = ls ? JSON.parse(ls?.getItem('cart')) : [];
    const [cartProducts, setCartProducts] = useState(defaultProducts || []);

    console.log(ls)
    useEffect(() => {
        if(cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    },[cartProducts]);
    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    },[]);
    function addProduct(productId) {
        setCartProducts(prev => [...prev, productId]);
    }
    function removeProduct(productId){
        setCartProducts(prev =>{
            const idPosition = prev.indexOf(productId);
            if (idPosition !== -1){
            return prev.filter((value, index) => index !== idPosition);
            }
            return prev;
         })
    }
    return (
        <CartContext.Provider value={{cartProducts, setCartProducts, addProduct, removeProduct}}>
            {children}
        </CartContext.Provider>
    );
}