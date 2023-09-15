import React, { useEffect, useState } from 'react';
import Home from './Home';

export default function App(){
    // Built states in parent component
    const [val,setVal] = useState('CodeKul');

    useEffect(()=>{
        const ffunc=async()=>{
            const url=await fetch('https://api.adviceslip.com/advice');
            const jsonData=await url.json();
            console.log(jsonData);
            console.log('hello')
            setVal(jsonData.slip.id);
        }

        ffunc(); //function calling
    },[val]);

    return(
        <>
            <Home userName={val} />
        </>
    )
}