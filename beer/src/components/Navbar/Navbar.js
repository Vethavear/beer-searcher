import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signOutStart } from './../../redux/User/user.actions';
import { addFavStart } from './../../redux/Beers/beer.actions';
import './navbar-styles.scss';
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";




const mapState = ({ user }) => (
    {
        currentUser: user.currentUser
    })


export const Navbar = (props) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(
        mapState);
    const favourites = useSelector(state => state.favourites)

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
                        
                        dispatch(addFavStart({ name: 'gówno' })) }} className="navItemLink">
                        <IconContext.Provider value={{ className: 'arrowIcon' }}>
                            <FaStar></FaStar>
                        </IconContext.Provider>
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