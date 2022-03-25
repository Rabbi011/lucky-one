import React from 'react';
import './Bird.css'
const Bird = (props) => {
    const {img,name,price} = props.bird;
    console.log(props.bird)
    return (
        <div className='product'> 
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>Price :${price}</h3>
            <button>Add Card</button>
        </div>
    );
};

export default Bird;