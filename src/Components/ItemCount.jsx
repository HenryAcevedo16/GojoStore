import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ItemCount({ onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    if (addedToCart) {
      setAddedToCart(false); // Cambia a "Agregar al carrito" cuando aumentas la cantidad
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (addedToCart) {
        setAddedToCart(false); // Cambia a "Agregar al carrito" cuando disminuyes la cantidad
      }
    }
  };

  const handleAddToCart = () => {
    onAdd(quantity);
    setAddedToCart(true); // Cambia a "Terminar mi compra" después de agregar al carrito
  };

  return (
    <QuantityContainer>
      <QuantityLabel>Cantidad:</QuantityLabel>
      <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
      <Quantity>{quantity}</Quantity>
      <QuantityButton onClick={incrementQuantity}>+</QuantityButton>

      {addedToCart ? (
        <Link to="/cart">
          <AddToCartButton>Terminar mi compra</AddToCartButton>
        </Link>
      ) : (
        <AddToCartButton onClick={handleAddToCart}>
          {addedToCart ? 'Terminar mi compra' : 'Agregar al carrito'}
        </AddToCartButton>
      )}
    </QuantityContainer>
  );
}

export default ItemCount;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const QuantityLabel = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const QuantityButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
`;

const Quantity = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
`;
