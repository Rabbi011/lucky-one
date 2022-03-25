import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';
// import Order from '../Order/Order';
import './Birds.css'

const Birds = () => {

   
    const [birds,setBirds] = useState([]);
    const [items,setItem] = useState([]);
    

    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBirds(data))
    },[])

    const handleAddToClick = (bird) =>{
        //  console.log(bird)
        const newItem = [...items, bird]
        setItem(newItem)
    }
    // console.log(items)
    
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
                 <div>
                 <h1>Product summery</h1>
                     <div className='bird'>
                  {
                      items.map(item => <h2 key = {item.id} > <img src={item.img} alt="" /> {item.name}</h2>)
                  }
                     </div>
                     <button>CHOOSE 1 FOR ME</button>
                     <br></br>
                        <button>CHOOSE AGAIN</button>
                 </div>
                  
            </div>
            
        </div>
    );
};

export default Birds;