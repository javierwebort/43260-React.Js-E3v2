import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, description }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <div className='leftColumn'>
        <h2>{nombre}</h2>
        <h3>$ {precio}</h3>
        <h3>ID: {id}</h3>
        <p>{description}</p>
        {
          agregarCantidad > 0 ? (
            <Link className='miBtn' to="/cart">Terminar compra</Link>
          ) : (
            <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
          )
        }
      </div>
      <div className='rightColumn'>
        <img src={img} alt={nombre} />
      </div>
    </div>
  );
}

export default ItemDetail
