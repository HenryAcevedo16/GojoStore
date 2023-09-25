import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Cart from "./Components/Cart";
import { CartProvider } from './Components/CartContext';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={< ItemListContainer/>} />
            <Route exact path="/category/:categoryId" element={< ItemListContainer/>} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  );
}

export default App;
