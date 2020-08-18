import React from 'react';
import './navbar-styles.scss';
export const Navbar = (props) => {


    return (
        <div className="navbar">
            <div className="logo">
                Beer Searcher
            </div>
            <ul className="nav">
                <li className="navItem">
                    <a href="#home" className="navItemLink"  >Home </a>
                </li>
                <li className="navItem">
                    <a href="#explore" className="navItemLink">Explore</a>
                </li>
            </ul>
        </div>
    )



}

export default Navbar;