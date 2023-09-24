import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { CartContext } from './CartContext';
import styled from "styled-components";

function CartWidget() {
  const { cartItems } = useContext(CartContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Use useEffect para actualizar la cantidad cuando cambie el carrito
  useEffect(() => {
    const newTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  return (
    <Link to="/cart">
      <Cart>
        <div className="animated-container">
          <div className="cart-wrapper">
            <div className="cart-container"></div>
          </div>

          <div className="cart-handle-wrapper">
            <div className="cart-handle"></div>
          </div>
          <div className="cart-item"></div>
        </div>
        <div className="cart">
          <span className="count">{totalQuantity}</span>
          <i className="material-icons"></i>
        </div>
      </Cart>
    </Link>
  );
}

export default CartWidget;



const Cart = styled.div`
  .animated-container {
    position: relative;
    margin: 0;
    transform: scale(0.5);
  }
  .count {
    position: absolute;
    top: -18px;
    left: 12px; 
    background-color: #ffffff; 
    color: #000000; 
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
  .cart-wrapper {
    width: 55px;
    height: 40px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: hidden;
  }

  .cart-container {
    width: 59px;
    height: 45px;
    box-sizing: border-box;
    position: relative;
    left: -2px;
    border-bottom: 50px solid red;
    border-left: 6px inset transparent;
    border-right: 6px inset transparent;
    animation: border 1s infinite;
  }

  .cart-handle {
    width: 18px;
    height: 8px;
    border: 4px solid red;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    animation: handle-border 1s infinite;
  }
  .cart-handle-wrapper {
    position: absolute;
    top: -9px;
    left: 15px;
    height: 9px;
    overflow: hidden;
    transform-origin: bottom center;
    animation: handle 1s infinite;
    transform-style: preserve-3d;
  }
  .cart-item {
    background-color: #000;
    width: 30px;
    height: 30px;
    transform: translate(0px, 0px) rotate(-30deg) scale(0.6);
    border-radius: 3px;
    position: absolute;
    top: -55px;
    left: 12px;
    z-index: -1;
    animation: item 1s infinite linear;
    opacity: 0;
  }
  @keyframes border {
    0% {
      border-left: 10px inset transparent;
      border-right: 10px inset transparent;
    }
    25% {
      border-left: 0px inset transparent;
      border-right: 0px inset transparent;
    }

    75% {
      border-left: 0px inset transparent;
      border-right: 0px inset transparent;
    }
  }
  @keyframes handle {
    0% {
      transform: rotateX(0);
    }
    35% {
      transform: rotateX(-180deg);
    }

    75% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes handle-border {
    0% {
      border-color: red;
    }
    25% {
      border-color: white;
    }

    75% {
      border-color: white;
    }
  }

  @keyframes item {
    0% {
      opacity: 0;
      transform: translate(0px, 0px) rotate(-40deg) scale(1.5);
    }
    20% {
      opacity: 1;
    }
    35% {
      transform: translate(0px, 15px) rotate(0deg) scale(0.6);
      opacity: 1;
    }
    60% {
      transform: translate(0px, 55px) rotate(0deg) scale(0.6);
      opacity: 1;
    }
    100% {
      transform: translate(0px, 55px) rotate(0deg) scale(0.6);
    }
  }

  .count {
    position: absolute;
    top: -18px; /* Ajusta esta distancia según necesites */
    left: 12px; /* Ajusta esta distancia según necesites */
    background-color: #d60b28;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;


