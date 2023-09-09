import React from "react";
import styled, { keyframes } from "styled-components";

function ItemListContainer() {

  return (
    <Item>
      <p className="nombre">
       Bienvenido a Gojo Store, la mejor tienda de funko pop
      </p>
    </Item>
  );
}

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

export default ItemListContainer;