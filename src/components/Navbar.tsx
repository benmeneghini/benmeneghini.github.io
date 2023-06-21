import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="uk-navbar-container">
            <div className="uk-container">
                <div uk-navbar="true">

                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav"> 
                            <li className={location.pathname === '/' ? "uk-active" : ""}><a href="/">About</a></li>
                            <li className={location.pathname === '/projects' ? "uk-active" : ""}><a href="/projects">Projects</a></li>
                            <li className={location.pathname === '/contact' ? "uk-active" : ""}><a href="/contact">Contact</a></li>
                        </ul>

                    </div>

                </div>
            </div>
        </nav>
    )
}
    
export default Navbar;