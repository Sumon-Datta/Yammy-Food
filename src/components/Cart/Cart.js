import React from 'react';

const Cart = ({cart}) => {
    const { img, name, price, rate } = cart;
    return (
        <div className='flex' >
            <img className='w-9 h-9 rounded-full'  src={img} alt="" />
            <h3 className='mx-3' >{name}</h3>
            <h3>{price}</h3>
        </div>
    );
};

export default Cart;