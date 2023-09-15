import React, { useEffect } from 'react';

export default function Hook(){

    useEffect(()=>{
        alert('alert');
        // document.write('Hello World');
    });

    return(
        <>
            <h1>Hook component</h1>
        </>
    )
}