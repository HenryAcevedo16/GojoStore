import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Orden({ ordenId }) {
  if (!ordenId) {
    return null;
  }

  return (
    <Container>
      <OrdenHeader>{`Gracias por tu compra, tu orden de compra es: ${ordenId}`}</OrdenHeader>
      <Comprar as={Link} to="/">Seguir Comprando</Comprar>
    </Container>
  );
}

export default Orden;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`;

const OrdenHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Comprar = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;
