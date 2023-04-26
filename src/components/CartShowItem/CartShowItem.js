import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./CartShowItem.css"

const CartShowItem = ({item, handleCartDelete}) => {
    const {name, price, img} = item;
    return (
        <div>
            <div className='flex align-middle mt-3'>
                <img className='w-9 rounded-full' src={img} alt="" />
                <h3 className='ml-3' >{name}</h3>
                <div className="price">
                <h3 className='ml-3' >{price}</h3>
                </div>
                <div className="delete ml-5 cursor-pointer" onClick={()=>handleCartDelete(item.id)} >
                    <FontAwesomeIcon icon={faTrash} />
                </div>               
                </div>
        </div>
    );
};

export default CartShowItem;