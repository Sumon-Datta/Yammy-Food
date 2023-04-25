import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css'

const CartItem = () => {
    const {cart, setCart} = useContext(CartContext)
    
    
    return (
        <div className='px-9 py-7 bg-white cart-bg ' >
           {
            cart.map(item=> 
                <div className='flex align-middle mt-3'>
                <img className='w-9 rounded-full' src={item.img} alt="" />
                <h3 className='ml-3' >{item.name}</h3>
                <div className="price">
                <h3 className='ml-3' >{item.price}</h3>
                </div>
                </div>
                )
           } 
           
        </div>
    );
};

export default CartItem;