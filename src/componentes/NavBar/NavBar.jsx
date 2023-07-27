import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo.png" className='imgFlawless' alt="Logo Flawless" />
      </Link>

      <nav>
        <ul>
        <li>
            <NavLink className="miBtn" to="/categoria/1"> Shampoo </NavLink>
          </li>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Conditioner </NavLink>
          </li>
          <li>
            <NavLink className="miBtn" to="/categoria/3"> Hair Oil </NavLink>
          </li>
          <li>
            <NavLink className="miBtn" to="/categoria/4"> Hair Spray </NavLink>
          </li>
          <li>
            <NavLink className="miBtn" to="/categoria/5"> Hair Dryers </NavLink>
          </li>


        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar