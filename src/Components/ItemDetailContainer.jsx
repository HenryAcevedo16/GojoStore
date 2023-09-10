import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ productos }) {
  const [producto, setProducto] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    if (productos) {
      const selectedItem = productos.find((item) => item.id === itemId);
      setProducto(selectedItem);
    }
  }, [itemId, productos]);

  return (
    <div>
      <div>
        <img width={450} src={producto.image} alt={producto.name} />
      </div>
      <div>
        <h1>{producto.name}</h1>
        <p>{producto.descripcion}</p>
        <p>{producto.category}</p>
        <span>${producto.price}</span>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
