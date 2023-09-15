import React, { useState } from 'react';
import Action from './Action';
import './App.css';

// import path

export default function Home({userName}){
    const [balance,setBalance]=useState(50000)
    return(
        <>
                {/* <div> {userName}  </div> */}
                <h2>Balance : {balance}</h2>
                <Action balance={balance} setBalance={setBalance} />
        </>
    )
}