import React from "react";

function Second(){
    return(
        <>
            <div>Hello I am From Second Function</div>
        </>
    )
}

function Header(){
    return(
        <>
            {Second()}
            <h2 className="header">HEllo I am Header Component</h2>
        </>
    )
}


export default Header;