import React from 'react';
import styled from 'styled-components';
import Item from './Item';

function ItemList({ productos }) {
  return (
    <ProductList>
      {productos.map((producto) => (
        <CardContainer key={producto.id}>
          <Item productos={producto} />
        </CardContainer>
      ))}
    </ProductList>
  );
}

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

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

export default ItemList;
