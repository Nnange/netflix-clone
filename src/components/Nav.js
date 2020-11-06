import React, { useEffect, useState } from 'react'
import "../CSS/Nav.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';

const Nav = () => {

    const [show, handleShow] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else  handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => handleShow(false));
        };
    }, []);

    return (
        <div className={`nav ${ show && "nav__black"}`}>
            <Sidebar
                sidebarClassName="nav__sidebar"
                sidebar={<SidebarContent option="Profile" />}
                open={sidebarOpen}
                onSetOpen={onSetSidebarOpen}
                styles={{ sidebar: { position: "fixed" } }}   
            >
                <MenuIcon onClick={() => onSetSidebarOpen(true)} className="nav__menu" />

            </Sidebar>
            
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
