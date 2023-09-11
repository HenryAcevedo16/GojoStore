import React, { useState } from 'react';
import styled from 'styled-components';

function ItemDetail({ item }) {
  // Estado para controlar la cantidad seleccionada
  const [quantity, setQuantity] = useState(1);

  // Función para incrementar la cantidad
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Función para decrementar la cantidad (con un mínimo de 1)
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <CardContainer>
      <ProductImage src={item.image} alt={item.name} />
      <ProductName>{item.name}</ProductName>
      <ProductDescription>{item.descripcion}</ProductDescription>
      <ProductCategory>Categoría: {item.category}</ProductCategory>
      <ProductPrice>Precio: ${item.price}</ProductPrice>
      <QuantityContainer>
        <QuantityLabel>Cantidad:</QuantityLabel>
        <QuantityButton onClick={decrementQuantity}>-</QuantityButton>
        <Quantity>{quantity}</Quantity>
        <QuantityButton onClick={incrementQuantity}>+</QuantityButton>
      </QuantityContainer>
      <AddToCartButton>Agregar al carrito</AddToCartButton>
    </CardContainer>
  );
}

export default ItemDetail;

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 20%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProductCategory = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
  margin-top: 10px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const QuantityLabel = styled.span`
  font-size: 1rem;
  margin-right: 10px;
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
  margin-top: 20px;
`;
