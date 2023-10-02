import React from 'react';

export default function Login(){
    return(
        <>
            <form action='' method='post' >
                <input type='text' name='uname' />
                <input type='password' name='passw' />
                <input type='submit' />
            </form>
        </>
    )
}