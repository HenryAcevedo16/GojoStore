import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    // Verificar si un producto ya está en el carrito
    const isInCart = cartItems.findIndex((item) => item.id === product.id);

    if (isInCart >= 0) {
      const newCart = [...cartItems];
      newCart[isInCart].quantity += 1;
      return setCartItems(newCart);
    }

    // Si el producto no está en el carrito
    setCartItems((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const getTotalPrice = () => {
    // Calcular el precio total sumando los precios de los productos en el carrito
    const total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.quantity;
    }, 0);

    return total;
    };

  return (
    <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cartItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
