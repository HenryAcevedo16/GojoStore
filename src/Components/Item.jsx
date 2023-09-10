import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`

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
`;

// Asegúrate de importar ProductImage de donde está definido
const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

function Item({ productos }) {
  return (
    <CardContainer>
      <ProductImage src={productos.image} width={150} alt={productos.name} />
      <ProductName>{productos.name}</ProductName>
      <DetailsButton to={`/item/itemId/${productos.id}`}>Más detalles</DetailsButton>
    </CardContainer>
  );
}

export default Item;
