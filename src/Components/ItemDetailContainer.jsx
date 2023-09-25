import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {

  const [item, setItem] = useState({});
  const {itemId } = useParams();

  useEffect(() => {
   const db = getFirestore();

   const productRef = doc(db, "productos", itemId);

   getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({id: snapshot.id, ...snapshot.data()})
      }
   })
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
