import React from 'react';
import Outp from './Outp';

export default function Listt(){
    // const techs=['HTML','CSS','React','Node','Express','JS'];
    const techs=[
        {id:1,techno:'HTML',type:'Markup'},
        {id:2,techno:'CSS'},
        {id:3,techno:'JS'},
        {id:4,techno:"React"}
    ];

    console.log(techs);

    return(
        <>
            <h1>List</h1>
            <ul>
                {techs.map((tech)=> <Outp idd={tech.id} te={tech.techno} />)}
            </ul>
        </>
    )
}