import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    const imgCarrito = "../img/shopping-cart.svg";

    return (
        <div className="cartWidgetContainer">
            <Link to="/cart" className="cartLink">
                <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong className="cantidadTotal"> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget