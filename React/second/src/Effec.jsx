import React, { useEffect, useState } from 'react';

export default function Effec(){
    const [count,setcount]=useState(1);
    const [cal,setCal]=useState(0);

    // useEffect(function,dependency)
    
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setcount(count+1);
    //     },500)
    // });

    useEffect(()=>{
        setCal(count*2);
        // Runs First 
        // And Any time any dependency value changes
    },[count])

    return(
        <>
            <h1>Count = {count}</h1>
            <button onClick={()=> setcount((c)=>c+1)}>Click me for *</button>
            <div>Calculation : {cal}</div>
        </>
    )
}