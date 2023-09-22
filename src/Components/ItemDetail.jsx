import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ItemDetail({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, isInCart } = useContext(CartContext);
  const MySwal = withReactContent(Swal);

  const handleAddToCart = (count) => {
    setQuantity(count);

    // Llama a la función addItem para agregar el producto al carrito
    addItem({
      id: item.id, 
      name: item.name,
      price: item.price,
      quantity: count,
    });

    // Muestra la alerta de SweetAlert
    MySwal.fire({
      title: <strong>¡Producto agregado al carrito!</strong>,
      text: `Has agregado ${count} ${item.name}(s) al carrito.`,
      icon: 'success',
    });
  };

  return (
    <CardContainer>
      <ProductImage src={item.image} alt={item.name} />
      <ProductName>{item.name}</ProductName>
      <ProductDescription>{item.descripcion}</ProductDescription>
      <ProductCategory>Categoría: {item.category}</ProductCategory>
      <ProductPrice>Precio: ${item.price}</ProductPrice>
      <ItemCount onAdd={handleAddToCart} />

      {/* Verifica si el producto está en el carrito y muestra un mensaje */}
      {isInCart(item.id) ? <p>Este producto está en tu carrito.</p> : null}
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
