import React, { useState } from 'react';
import Action from './Action';

export default function Home(){
    const [balance,setBalance]=useState(50000)
    return(
        <>
            <h1>Home Component is main now</h1>
            <h1>Total Balance is : {balance} </h1>
            <Action balance={balance} setBalance={setBalance} />
        </>
    )
}