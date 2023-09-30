import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from './CartContext';
import Orden from './Orden';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ordenId, setOrdenId] = useState();
  
  // Obtiene el valor de cartItems desde el contexto del carrito
  const { cartItems, getTotalPrice, clear } = useContext(CartContext);

  function crearOrden() {
    const db = getFirestore();
    const ordenesRef = collection(db, "ordenes");

    // Agrega la orden a la colección "ordenes"
    const order = {
      buyer: {
        name,
        email,
        phone,
      },
      items: cartItems.map((producto) => ({
        id: producto.id,
        title: producto.name,
        price: producto.price,
        cant: producto.quantity,
      })),
      total: getTotalPrice(),
    };

    addDoc(ordenesRef, order)
      .then((docRef) => {
        // La orden se ha agregado con éxito, docRef contiene la referencia al documento creado
        console.log("Orden creada con ID:", docRef.id);
        setOrdenId(docRef.id);

      })
      .catch((error) => {
        console.error("Error al crear la orden:", error);
        // Maneja el error de acuerdo a tus necesidades
      });
  }

  if (ordenId) {
    return <Orden ordenId={ordenId} />;
  }

  return (
    <Container>
      <FormContainer>
        <Formulario onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone</Label>
            <Input
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </FormGroup>
        </Formulario>
        <Finalizar onClick={crearOrden}>Finalizar</Finalizar>
      </FormContainer>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-image: url("/src/Components/img/bck.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column; /* Coloca los elementos en una columna */
  align-items: center; /* Centra los elementos horizontalmente */
`;

const Formulario = styled.form`
  background-color: rgba(42, 43, 56, 0.7);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Finalizar = styled.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;

  &:hover {
    background-color: #ffdbb7;
  }
`;
