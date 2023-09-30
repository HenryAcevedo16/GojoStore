import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Item({ productos }) {
  return (
    <CardContainer>
      <ProductImageContainer>
        <ProductImage src={productos.image} alt={productos.name} loading="lazy"/>
      </ProductImageContainer>
      <ProductName>{productos.name}</ProductName>
      <DetailsButton to={`/item/${productos.id}`}>Más detalles</DetailsButton>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Efecto de zoom al hacer hover */
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Efecto de zoom en la imagen al hacer hover */
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
  margin-top: 10px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export default Item;
