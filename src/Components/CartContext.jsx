import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    const isInCart = cartItems.findIndex((item) => item.id === product.id);
  
    if (isInCart >= 0) {
      const newCart = [...cartItems];
      newCart[isInCart].quantity += product.quantity;
      return setCartItems(newCart);
    }
  
    setCartItems((prevState) => [
      ...prevState,
      {
        ...product,
      },
    ]);
  };
  

  const removeItem = (itemId, quantity = 0) => {
    // Buscar el artículo en el carrito
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  
    if (itemIndex !== -1) {
      const newCart = [...cartItems];
  
      if (quantity > 0 && newCart[itemIndex].quantity > quantity) {
        // Restar la cantidad especificada si es menor que la cantidad actual
        newCart[itemIndex].quantity -= quantity;
      } else {
        // Eliminar completamente el artículo si no se especifica una cantidad o es igual o mayor que la cantidad actual
        newCart.splice(itemIndex, 1);
      }
  
      setCartItems(newCart);
    }
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
