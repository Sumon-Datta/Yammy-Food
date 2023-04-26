import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import CartShowItem from '../CartShowItem/CartShowItem';

const CartItem = () => {
    
    const {cart, setCart} = useContext(CartContext)

    const [deletecart, setDeletecart] = useState([])
    

    const handleCartDelete = (id) =>{
        setCart(cart.filter(cartt => cartt.id !== id)) 
    }

    
    
    
    return (
        <div className='px-9 py-7 bg-white cart-bg ' >
           {
            cart.map(item=>     
                <CartShowItem
                item = {item}
                handleCartDelete = {handleCartDelete}
                ></CartShowItem>
                )
           } 
           
        </div>
    );
};

export default CartItem;