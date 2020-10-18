import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutStart } from './../../redux/User/user.actions';
import { toggleFavs, getFavsStart, clearBeerAndFavsOnSignOut } from './../../redux/Beers/beer.actions'
import './navbar-styles.scss';
import { FaStar } from "react-icons/fa";
import Favourites from '../Favourites/Favourites'
import { IconContext } from "react-icons";



export const Navbar = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
    const favourites = useSelector(state => state.beers.favourites);
    const isFavVisible = useSelector(state => state.beers.toggleFavs);
    useEffect(() => {

        dispatch(getFavsStart());

    }, [])


    const signOut = () => {
        dispatch(signOutStart());
        dispatch(clearBeerAndFavsOnSignOut())
    }
    return (
        <div className="navbar">
            <div className="logo">
                Beer Searcher
            </div>
            <ul className="nav">
                <li className="navItem">
                    <Link className="navItemLink" to="/">Home</Link>
                </li>
                <li className="navItem">
                    <Link className="navItemLink" to="/explore">Explore</Link>
                </li>

                {currentUser && (<li className="navItem">
                    <button onClick={() => signOut()} className="navItemLink">Sign out</button>
                </li>)}
                {currentUser && (<li className="navItem">

                    <FaStar className="favStar" onClick={() => {
                        dispatch(toggleFavs());
                    }}></FaStar>
                    <Favourites favVisible={isFavVisible} favBeers={favourites}></Favourites>
                </li>)}

                {!currentUser && (<li className="navItem">

                    <Link className="navItemLink" to="/signin">Sign in</Link>
                </li>)}
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    currentUser: true
}

export default Navbar