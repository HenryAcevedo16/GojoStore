import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Item({ productos }) {
  return (
    <CardContainer>
      <ProductImage src={productos.image} width={150} alt={productos.name} />
      <ProductName>{productos.name}</ProductName>
      <DetailsButton to={`/item/${productos.id}`}>Más detalles</DetailsButton>
    </CardContainer>
  );
}

export default Item;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const DetailsButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;
