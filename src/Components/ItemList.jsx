import React from 'react';
import styled from 'styled-components';
import Item from './Item';

function ItemList({ productos }) {
  return (
    <ProductList>
      {productos.map((producto) => (
        <CardContainer key={producto.id}>
          <ItemImage src={producto.image} alt={producto.name} loading="lazy"/>
          <ItemInfo>
            <Item productos={producto} />
          </ItemInfo>
        </CardContainer>
      ))}
    </ProductList>
  );
}

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const CardContainer = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.05); /* Escala el contenedor al hacer hover */
  }
`;

const ItemImage = styled.img`
  max-width: 90%;
  height: auto; /* Esto mantendrá la relación de aspecto de la imagen */
  margin-bottom: 10px;
  width: 50%; /* Agrega este atributo width para asegurarte de que la imagen llene su contenedor */
  max-height: 300px; /* Establece una altura máxima para que las imágenes no sean demasiado grandes */
`;

const ItemInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none; /* Oculta la información del producto por defecto */

  ${CardContainer}:hover & {
    display: block; /* Muestra la información del producto al hacer hover */
  }
`;

export default ItemList;
