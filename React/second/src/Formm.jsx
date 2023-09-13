import React, { useState } from 'react';

export default function Formm(){
    const  [color,setColor] =useState('red');

    const onch=(e)=>{
            setColor(e.target.value);}
    return(
        <>
            <form>
                <input type='color' value={color} onChange={onch} />
            </form>
            <h1 style={{color:color,marginLeft:'20%'}}>Color Values</h1>
        </>
    )
}