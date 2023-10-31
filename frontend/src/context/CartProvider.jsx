import { useState, useContext, useEffect, useCallback, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const localStorageCart = window.localStorage.getItem('cart');
    const initialCart = localStorageCart ? JSON.parse(localStorageCart) : [];

    const [ cart, setCart ] = useState(initialCart);

    const checkProduct = (name) => {
        if( cart.length ){
            return cart.find(item => item.name === name) || false;
        }
        return false;
    }

    // const addProduct = (product) => {
    //     if ( !checkProduct(product.name)) {
    //         setCart(products => [...products, { ...product, qty: 1}])
    //     }
    // }

    // const removeProduct = (name) => {
    //     setCart(products => products.filter(item => item.name !== name));
    // }

    const toggleProduct = (props) => {
        if( !checkProduct(props.name) ){
            setCart(products => [...products, {...props, qty: 1}]);
        }
        else{
            setCart(products => products.filter(products => products.name !== props.name));
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart, checkProduct, toggleProduct }}>
            { children }
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}