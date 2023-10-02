import React from 'react';

export default function Register(){
    return(
        <>
            <form action='http://localhost:8595/login/' method='post' >
                <input type='text' name='uname' />
                <input type='email' name='email' />
                <input type='password' name='passw' />
                <input type='submit' />
            </form>
        </>
    )
}