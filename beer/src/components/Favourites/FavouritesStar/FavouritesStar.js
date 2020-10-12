import './favouritesStar.scss'
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"
import { addFavStart, deleteFavStart } from '../../../redux/Beers/beer.actions'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'


const FavouritesStar = ({ favedBeer }) => {
    const dispatch = useDispatch();
    const favs = useSelector(state => state.beers.favourites);
    if (Array.isArray(favs) && favs.length > 0) {
        if (favs.find(el => el.id == favedBeer.id)) {
            return (
                <button className="favsButton" onClick={() => {
                    dispatch(deleteFavStart(favedBeer))
                }}>
                    <IconContext.Provider value={{ className: 'favStar' }}>
                        <FaStar></FaStar>
                    </IconContext.Provider>
                </button>
            )
        }
    }
    return (
        <button className="favsButton" onClick={() => {
            dispatch(addFavStart(favedBeer))
        }}>
            <IconContext.Provider value={{ className: 'favStar' }}>
                <AiOutlineStar></AiOutlineStar>
            </IconContext.Provider>
        </button>
    )


}

export default FavouritesStar
