import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Cart = ({cart}) => {
    const { img, name, price } = cart;

   

    return (
        <div className='flex' >
            <img className='w-9 h-9 rounded-full'  src={img} alt="" />
            <h3 className='mx-3' >{name}</h3>
            <h3>{price}</h3>
            
            <FontAwesomeIcon icon={faTrash} />
            
            
        </div>
    );
};

export default Cart;