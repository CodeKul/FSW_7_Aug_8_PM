import React, { useState } from 'react';

export default function Statee(){
    // U can change values 
    
    // c/l/v [var,SetVar]=useState(defaultValues);
    const [count,setCount] = useState(5);

    // setCount(count+1)

    const oncli=()=>{
        setCount(count*3);
    }
    return(
        <>
                <br/><br/>
                <button style={{background:'black'}} onClick={oncli}> + </button>
                <h1>Value of Count is {count}</h1>
        </>
    )
}