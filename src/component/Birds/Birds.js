import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';

import './Birds.css'

const Birds = () => {

   
    const [birds,setBirds] = useState([]);
    const [items,setItem] = useState([]);
   if(items.length === 5){
       alert('OPPS, just four item Select')
   }
    
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBirds(data))
    },[])

    const handleAddToClick = (bird) =>{
       
        if(items.indexOf(bird) !== -1) return;
        const newItem = [...items, bird]
        setItem(newItem) 
    }
   
    
    const removeItem = () =>{
       setItem([])
    }
     const randomNumber =() =>{
         const random =[Math.floor(Math.random() * (items.length -1))];
        let elem = items[random ]
        alert('Thanks for Choose Buy now :'+ elem.name)
         
     }
    
   
    return (
        <div className='shop-container'>
            
            <div className='products-container'>
            {
                birds.map(bird => <Bird 
                    bird ={bird} 
                    key = {bird.id} 
                    handleAddToClick ={handleAddToClick}

                    ></Bird> ) 
            }
            </div>
           
            <div className='card-container'>
                 <div className='card'>
                 <h1>Product summery</h1>
                     <div className='bird'>
                     {
                      items.map(item => <h2 key = {item.id} > <img src={item.img} alt="" /> {item.name}</h2>)
                  }
                     </div>
                     <button onClick={randomNumber}>CHOOSE 1 FOR ME</button>
                     <br></br>
                        <button onClick={removeItem} >CHOOSE AGAIN</button>
                 </div>

                  
            </div>
            
        </div>
    );
};

export default Birds;