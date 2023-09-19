import { createContext, useState, useContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    calculateTotal: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart((prev) =>
                prev.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + quantity }
                        : cartItem
                )
            );
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
        setTotalQuantity((prev) => prev + quantity);
    };
    
    const calculateTotal = () => {
        const newTotal = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.quantity;
        }, 0);
        return newTotal;
    };
    const removeItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        const removedItem = cart.find((item) => item.id === itemId);
        if (removedItem) {
        setTotalQuantity((prev) => prev - removedItem.quantity);
        }
    };
    
        const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
    };
    
        const isInCart = (itemId) => {
        return cart.some((item) => item.id );
    };
    
        return (
        <CartContext.Provider
            value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            calculateTotal,
            totalQuantity,
        }}
        >
        {children}
        </CartContext.Provider>
    );
    };
    

export const useCart = () => {
    return useContext(CartContext);
};