import  { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItem, clear, getTotalPrice } = useContext(CartContext);

  return (
    <CartContainer>
      <CartHeader>Carrito de Compras</CartHeader>
      {cartItems.length === 0 ? (
        <EmptyCartMessage>No hay ítems en el carrito.</EmptyCartMessage>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id}> 
              <img src={`/public/img${item.image}`} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>Precio: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </CartItem>
          ))}
          <TotalPrice>Precio Total: ${getTotalPrice()}</TotalPrice>
          <ClearButton onClick={clear}>Vaciar Carrito</ClearButton>
        </div>
      )}
      <BackLink to="/">Volver a la tienda</BackLink>
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
`;

const CartHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const EmptyCartMessage = styled.p`
  font-size: 1rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    height: auto;
    margin-right: 10px;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  button {
    background-color: #ff0000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const TotalPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;

const ClearButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

const BackLink = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 1rem;
  text-decoration: none;
`;