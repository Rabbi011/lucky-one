import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';
import './Birds.css'

const Birds = () => {

   
    const [birds,setBirds] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBirds(data))
    },[])
    
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
            {
                birds.map(bird => <Bird bird ={bird} key = {bird.id} ></Bird> ) 
            }
            </div>
            <div className='card-container'>
                  <h1>Poduct summery</h1>
            </div>
            
        </div>
    );
};

export default Birds;