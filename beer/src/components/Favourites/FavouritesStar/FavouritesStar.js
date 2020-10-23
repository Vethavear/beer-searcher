import './favouritesStar.scss'
import { FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai"
import { addFavStart, deleteFavStart } from '../../../redux/Beers/beer.actions'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'


const FavouritesStar = ({ favedBeer }) => {
    const dispatch = useDispatch();
    const favs = useSelector(state => state.beers.favourites);
    const { currentUser } = useSelector(state => state.user);
    if(currentUser){

    if (Array.isArray(favs) && favs.length > 0) {
        if (favs.find(el => el.id === favedBeer.id)) {
            return (
                <button className="favsButton" onClick={() => {
                    dispatch(deleteFavStart(favedBeer))
                }}>
                    <FaStar className='favStar'></FaStar>
                </button>
            )
        }
    }
    return (
        <button className="favsButton" onClick={() => {
            dispatch(addFavStart(favedBeer))
        }}>
            <AiOutlineStar className='favStar'></AiOutlineStar>
        </button>
    )
}
else{
    return (
        <button className="favsButton" onClick={() => {
        }}>
            <AiOutlineStar className='favStar'></AiOutlineStar>
        </button>
    )
}

}

export default FavouritesStar
