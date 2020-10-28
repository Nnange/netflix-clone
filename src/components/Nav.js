import React, { useEffect, useState } from 'react'
import "../CSS/Nav.css"

const Nav = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else  handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
        <div className={`nav ${ show && "nav__black"}`}>
            <img
                className="nav__logo" 
                src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                alt="Netflix Logo"
            />

            <img 
                className="nav__avatar"
                src="https://pbs.twimg.com/media/CW2i0pJW4AEYFI3.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
