import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Agregar aquí la lógica de autenticación
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Inicio de sesión correcto
      const user = userCredential.user;

      // Almacenar un indicador de sesión en LocalStorage
      localStorage.setItem('isAuthenticated', 'true');

      // Alerta de bienvenida al usuario
      Swal.fire({
        icon: 'success',
        title: `¡Bienvenido a GojoStore Nakama!`,
        text: 'Tu sesión ha iniciado correctamente'
      }).then(() => {
        setTimeout(() => {
          navigate("/")
        }, 1000);
      })

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Alerta de un error al usuario
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'El correo o la contraseña son incorrectos. Por favor, inténtalo de nuevo.'
      })
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
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
        <ButtonContainer>
          <Button onClick={handleLogin}>Login</Button>
          <ResetPass onClick={handleLogin}>Reset Pass</ResetPass>
        </ButtonContainer>
        <SignupLink to={`/signup`}>No tienes una cuenta? Regístrate aquí</SignupLink>
      </FormContainer>
    </Container>
  );
};

export default Login;

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 48%;
  font-size: 18px;
`;

const ResetPass = styled.button`
  background-color: #ffeba7;
  color: #102770;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 48%;
  font-size: 18px;
`;

const SignupLink = styled(RouterLink)`
  display: block;
  text-align: center;
  color: #ffeba7;
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
`;
