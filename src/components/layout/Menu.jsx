import React from "react";
import { Link } from "react-router-dom"
import "./Menu.css"

const Menu = props => (
  <asside className="Menu">
    <nav>
      <ul>
        <li>
          {/* <a href="/">Inicio</a> */}
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
        <li>
          <Link to="/naoExiste">Não Existe!</Link>
        </li>
      </ul>
    </nav>
  </asside>
)

export default Menu
