import React from 'react'
import '../NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="NavBarContainer">
            <h1 className="NavBarH">Scotti</h1>
            <ul className="NavBarLista">
                <li className="NavBarItem">
                    <a href="index.html">Nosotros</a> 
                </li>
                <li className="NavBarItem">
                    <a href="index.html">Productos</a>
                </li>
                <li className="NavBarItem">
                    <a href="index.html">Contacto</a>
                </li>
            </ul>
            <CartWidget></CartWidget>
        </div>
      
        
    )
}

export default NavBar