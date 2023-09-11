// It contain action
import React from 'react';

export default function Action({balance,setBalance}){

    const add500=()=>{
        setBalance(balance+500);
    }

    return(
        <>
            <button onClick={add500}>Add 500</button>
        </>
    )
}