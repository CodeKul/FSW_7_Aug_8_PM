import React, { useState } from 'react';

export default function Chang(){

    // [currentState,functionToUpdate] = useState('Initial Value')
    const [text,setText]=useState('');
    const [color,setColor]=useState();

    // (event)
    const onch=(e)=>{setText(e.target.value);}
    const onch1=(e)=>{setColor(e.target.value);}
    
    return(
        <>
            <form>
                <label>Enter Text : </label>
                <input type='text' value={text} onChange={onch}  />
                <input type='color' value={color} onChange={onch1} />
                <input type='submit' />
            </form>

            <h1>Your Text Is : {text}</h1>

            <h1 style={{backgroundColor:color}}>Color {color} Change</h1>
        </>
    )
}