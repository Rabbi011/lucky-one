import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Bird.css'
const Bird = (props) => {
    const {img,name,price} = props.bird;

    return (
        <div>
            
            <div className='product'> 

            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>Price :${price}</h3>
            <button onClick={() =>props.handleAddToClick(props.bird) } className='btn-card'>
                <p className='btn-text'>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>

            </div>
        </div>
        
    );
};

export default Bird;