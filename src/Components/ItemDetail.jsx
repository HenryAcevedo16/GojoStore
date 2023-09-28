import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    item.stock -= count;
    setQuantity(count);

    // Llama a la función addItem para agregar el producto al carrito
    addItem({
      id: item.id, 
      image: item.image,
      name: item.name,
      price: item.price,
      quantity: count,
    });
  };

  return (
    <Container>
      <CardContainer>
        <ProductImage src={item.image} alt={item.name} loading="lazy"/>
        <ProductInfo>
          <ProductName>{item.name}</ProductName>
          <ProductDescription>{item.descripcion}</ProductDescription>
          <ProductCategory>Categoría: {item.category}</ProductCategory>
          <ProductPrice>Precio: ${item.price}</ProductPrice>
          <ItemCount onAdd={handleAddToCart} quantity={quantity} setQuantity={setQuantity} />

          {/* Verifica si el producto está en el carrito y muestra un mensaje */}
          {isInCart(item.id) ? <p>Este producto está en tu carrito.</p> : null}
        </ProductInfo>
      </CardContainer>
    </Container>
  );
}

export default ItemDetail;

const Container = styled.div`
  margin-botton: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 80%; /* Reducimos el tamaño del contenedor */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 30%;
  height: auto;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
  text-align: left;
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
