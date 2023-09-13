import React from 'react';

function Outp(props) {
    return (
    <>
       
       <table border={4}>
        <tr>
            <td>{props.idd}</td>
            <td>{props.te}</td>
        </tr>
       </table>
    </>
    );
}

export default Outp;        