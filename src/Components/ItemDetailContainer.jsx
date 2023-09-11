import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductosJson from './productos.json';
import styled, { keyframes } from 'styled-components';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const mockApi = (itemId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (itemId !== undefined) {
          const itemFilter = ProductosJson.find((item) => item.id === Number(itemId));

          if (itemFilter) {
            resolve(itemFilter);
          } else {
            reject("Producto no encontrado"); 
          }
        } else {
          reject("ID de producto no especificado"); 
        }
      }, 1000);
    });
  };

  const [item, setItem] = useState({});
  const {itemId } = useParams();

  useEffect(() => {
    mockApi(itemId)
      .then((data) => setItem(data))
      .catch((error) => console.error(error)); 
  }, [itemId]);

  return (
    <>
      <Item>
        <p className="nombre">
          Bienvenido a Gojo Store, la mejor tienda de funko pop
        </p>
      </Item>

      <div>
        <ItemDetail item={item} />
      </div>
    </>
  );
}

export default ItemDetailContainer;

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Item = styled.div`
  margin: auto;
  text-align: center;
  animation: ${fadeInScale} 1s ease-in-out;

  .nombre {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-top: 20px;
  }
`;
