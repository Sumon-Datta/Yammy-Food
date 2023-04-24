import React from 'react';
import Menu from '../Menu/Menu';
import Products from '../Products/Products';
import './MainPart.css'

const MainPart = () => {
    return (
        <div className='mainPart' >
            {/*-------------- Menu -------------------*/}
            <Menu></Menu>
            {/*-------------- Menu -------------------*/}
            {/*-------------- Products ------------------*/}
            <Products></Products>
            {/*-------------- Products ------------------*/}
        </div>
    );
};

export default MainPart;