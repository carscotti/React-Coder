import React from 'react'
import '../Carrito.css'
import itemcarrito from '../itemcarrito.png';

const CartWidget = () => {
    return (
        <div>
            <img src={itemcarrito} class="cartWidget" alt="cart" />
        </div>
        
    )
}

export default CartWidget