import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItem, clear, getTotalPrice } = useContext(CartContext);

  return (
    <CartContainer>
      <CartHeader>Carrito de Compras</CartHeader>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>No hay ítems en el carrito.</EmptyCartMessage>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id}> 
              <img src={item.image} alt={item.name} loading="lazy"/>
              <div>
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </CartItem>
          ))}
          <TotalPrice>Precio Total: ${getTotalPrice()}</TotalPrice>
          <ClearButton onClick={clear}>Vaciar Carrito</ClearButton>
          <Compra as={Link} to="/checkout">Finalizar Compra</Compra> {/* Usamos Link para redirigir a /checkout */}
        </div>
      )}
      <BackLink to="/">Volver a la tienda</BackLink>
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
`;

const CartHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const EmptyCartMessage = styled.p`
  font-size: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Aumenta el espacio entre los elementos del carrito */

  img {
    max-width: 100px;
    height: auto;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  label {
    font-size: 1rem;
    margin-right: 5px;
  }

  input {
    font-size: 1rem;
    width: 40px;
  }

  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 10px;
    margin-left: 30px; 
  }

  button:hover {
    background-color: #ff3333; 
  }
`;

const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #0056b3;
  }
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 1rem;
  text-decoration: none;
`;

const Compra = styled.button`
background-color: #007bff;
color: #fff;
border: none;
border-radius: 5px;
padding: 10px 20px;
font-size: 1rem;
cursor: pointer;
margin-top: 20px;
transition: background-color 0.3s ease; 
margin-bottom: 10px;
margin-left: 20px; 

&:hover {
  background-color: #0056b3;
`;
