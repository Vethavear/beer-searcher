import React from 'react';
import './navbar-styles.scss';
import {auth} from '../../firebase/utils';
export const Navbar = (props) => {

    const { currentUser } = props;
    return (
        <div className="navbar">
            <div className="logo">
                Beer Searcher
            </div>
            <ul className="nav">
                <li className="navItem">
                    <a href="/" className="navItemLink"  >Home </a>
                </li>
                <li className="navItem">
                    <a href="/explore" className="navItemLink">Explore</a>
                </li>

                {currentUser && (<li className="navItem">
                    <a href="/signOut" onClick={() => auth.signOut()}className="navItemLink">Sign out</a>
                </li>)}

                {!currentUser && (<li className="navItem">
                    <a href="/signin" className="navItemLink">Sign in</a>
                </li>)}


            </ul>
        </div>
    )



}

Navbar.defaultProps = {
    currentUser: true
}

export default Navbar;