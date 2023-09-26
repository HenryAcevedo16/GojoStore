import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const MySwal = withReactContent(Swal);

  const handleSignup = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const db = getFirestore();
      await addDoc(collection(db, "users"), {
        firstName: name,
        lastName: lastName,
        email: email,
      });
  
      MySwal.fire({
        title: <strong>¡Registro Exitoso!</strong>,
        text: `Bienvenido ${name} ${lastName} a GojoStore.`,
        icon: 'success',
      }).then(() => {
        // Limpiar el formulario después de mostrar la alerta
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      //Alerta para cuando haya un error
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar usuario',
        text: 'Error al registrar usuario, inténtalo de nuevo con otro correo o verificar el mismo.'
      })
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Regístrate</Title>
        <FormGroup>
          <Label>Nombre:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Apellido:</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button onClick={handleSignup}>Registrarse</Button>
        <LoginLink to="/login">¿Ya tienes una cuenta? Inicia sesión aquí</LoginLink>
      </FormContainer>
    </Container>
  );
};

export default Signup;

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
  background-color: rgba(42, 43, 56, 0.7);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  color: #ffeba7;
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  color: #c4c3ca;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  font-size: 18px;
`;

const LoginLink = styled(RouterLink)`
  display: block;
  text-align: center;
  color: #ffeba7;
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
`;
