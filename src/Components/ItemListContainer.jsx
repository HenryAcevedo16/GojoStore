import {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components";
import ProductosJson from '/productos.json'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const mockApi = (categoryId) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if(categoryId !== undefined){
          const productosFilter = ProductosJson.filter((item) => item.category === categoryId)

          resolve(productosFilter)

        }else {
          resolve(ProductosJson);
        }
        
      }, 2000)
    })
  }

  const [productos, setProductos] = useState([])
  const {categoryId} = useParams ()

  useEffect(() =>{
    mockApi(categoryId).then((data) => setProductos(data))
  }, [categoryId])


  return (
    <>
    <Item>
      <p className="nombre">
       Bienvenido a Gojo Store, la mejor tienda de funko pop
      </p>
    </Item>

    <div>
      <ItemList productos={productos}/>
    </div>


    </>
    

    
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