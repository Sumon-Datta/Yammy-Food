import React, { createContext, useEffect, useState } from 'react';
import BBQCard from './BBQCard/BBQCard';
import Header from '../Header/Header';


const data = createContext()


const Bbq = () => { 
    const [bbqs, setBbq] = useState([])
    const [bbqnum, setBbqnum] = useState([])

    //--------- Fetch data from bbq json-----------//
    useEffect(()=>{
        const fetchBbqData = async () =>{
            const res = await fetch('bbq.json')
            const data = await (res.json())
            setBbq(data)
        }
        fetchBbqData()
    },[])
    //--------- Fetch data from bbq json-----------//

    // const handleAddToCart = (bbq) =>{
    //     const newBbq = [...bbqnum, bbq]
    //     setBbqnum(newBbq)
    // }

    // context api

    

    
   
    return (
        <>
        
        <div className='grid md:grid-cols-4 gap-4 sm:grid-cols-2'>
            
           {
            bbqs.map(bbq =>
            // BBQCard Add and data send by props
            <BBQCard
            key = {bbq.id}
            bbq = {bbq}
            
            ></BBQCard> 
            // BBQCard Add and data send by props  
            )
           }
        </div>
        </>
    );
};

export default Bbq;

export {data}

