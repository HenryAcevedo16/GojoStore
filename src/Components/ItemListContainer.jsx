import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q;

    if (categoryId) {
      // Si categoryId está definido, aplicamos el filtro por categoría
      q = query(collection(db, "productos"), where("category", "==", categoryId));
    } else {
      // Si categoryId no está definido, obtenemos todos los productos sin filtro
      q = collection(db, "productos");
    }

    getDocs(q)
      .then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, [categoryId]);

  return (
    <Container>
      <WelcomeMessage>Bienvenido a Gojo Store, la mejor tienda de Funko Pop</WelcomeMessage>
      <ItemList productos={productos} />
    </Container>
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

const Container = styled.div`
  margin: auto;
  text-align: center;
  animation: ${fadeInScale} 1s ease-in-out;
`;

const WelcomeMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

export default ItemListContainer;
