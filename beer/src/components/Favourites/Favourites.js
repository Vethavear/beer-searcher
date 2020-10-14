import React from 'react'
import './favourites.scss'
import FavouritiesItem from './FavouritesItem/FavouritesItem'
const Favourites = ({ favBeers }) => {
    return (
        <div className="favourites">
            <ul className="favouritesList">
                {favBeers.map(el => <FavouritiesItem key={el.name} beer={el}></FavouritiesItem>)}
            </ul>

        </div>
    )
}
export default Favourites
