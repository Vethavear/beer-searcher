import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signOutStart } from './../../redux/User/user.actions';
import './navbar-styles.scss';
import { FaStar } from "react-icons/fa";




const mapState = ({ user }) => (
    {
        currentUser: user.currentUser
    })


export const Navbar = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(
        mapState);
    const favourites = useSelector(state => state.beers.favourites)

    const signOut = () => {
        dispatch(signOutStart())
    }
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
                    <a onClick={() => signOut()} className="navItemLink">Sign out</a>
                </li>)}
                {currentUser && (<li className="navItem">
                    <a onClick={() => {
                        
                        }} className="navItemLink">
                            <FaStar></FaStar>
                    </a>
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

export default Navbar