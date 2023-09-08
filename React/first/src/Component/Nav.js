import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return ( 
        <>
            <ul>
                <li> <NavLink to={'/'}> Home </NavLink> </li>
                <li> <NavLink to={'/abt'}> About us </NavLink> </li>
            </ul>
        </>
     );
}

export default Nav;