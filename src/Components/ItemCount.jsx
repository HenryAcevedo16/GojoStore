import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ItemCount({ onAdd, quantity, setQuantity }) {
  const [count, setCount] = useState(quantity);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    setCount(quantity); // Actualiza el estado interno cuando cambia la prop quantity
  }, [quantity]);

  const incrementQuantity = () => {
    setCount((prevCount) => prevCount + 1);
    setAddedToCart(false);
    setQuantity(count + 1); // Actualiza la cantidad en el componente padre
  };

  const decrementQuantity = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setAddedToCart(false);
      setQuantity(count - 1); // Actualiza la cantidad en el componente padre
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
    setAddedToCart(true);
  };

  return (
    <QuantityContainer>
      <QuantityLabel>Cantidad:</QuantityLabel>
      <QuantityButtons>
        <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
        <Quantity>{count}</Quantity>
        <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
      </QuantityButtons>

      {addedToCart ? (
        <Link to="/cart">
          <AddToCartButton>Terminar mi compra ({count} seleccionado(s))</AddToCartButton>
        </Link>
      ) : (
        <AddToCartButton onClick={handleAddToCart}>
          Agregar al carrito
        </AddToCartButton>
      )}
    </QuantityContainer>
  );
}

export default ItemCount;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const QuantityLabel = styled.span`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
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
  margin: 0 10px;
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