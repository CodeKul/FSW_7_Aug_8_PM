import React from 'react';

export default function Propss(props){

    var uName={"Name":'CodeKul',"Location":"Pune"};

    return(
        <>
            <h1>Welcome {uName.Name} & {uName.Location} | Came from same component </h1> 
            <br/>
            <h1>USer Name {props.userName} & Location {props.Location} | Came from Different component</h1>
        </>
    )
}