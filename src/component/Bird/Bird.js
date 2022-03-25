import React from 'react';
import './Bird.css'
const Bird = (props) => {
    const {img,name,price} = props.bird;

    // console.log(props.bird)
    return (
        <div>
            
            <div className='product'> 

            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>Price :${price}</h3>
            <button onClick={() =>props.handleAddToClick(props.bird) } className='btn-card'>Add to Card</button>

            </div>
        </div>
        
    );
};

export default Bird;