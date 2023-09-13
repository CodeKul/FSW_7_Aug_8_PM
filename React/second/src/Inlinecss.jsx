import React from 'react';

export default function Inlinecss(){
    var mstyle={
        color:'red',
        backgroundColor:'bisque',
        height:'200px',
        width:'200px',
    }
    return(
        <>
            <h1 style={mstyle}>CSS </h1>
            <h2 style={{color:'red'}}>inline css</h2>
            <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ut?</div>
        </>
    )
}

// function FunctionName(){statements}