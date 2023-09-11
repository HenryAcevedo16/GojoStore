import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./Components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={< ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={< ItemListContainer/>} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
