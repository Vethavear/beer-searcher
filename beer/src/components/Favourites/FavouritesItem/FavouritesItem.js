import React from 'react';
import './favouritesItem.scss';
import { toggleFavs, showBeerDetails } from '../../../redux/Beers/beer.actions'
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom'
const FavouritesItem = ({ beer }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const handleFavBtnClick = () => {
        if (location.pathname === '/') {
            history.push('/explore');
        }
        dispatch(showBeerDetails(beer));
        dispatch(toggleFavs());
    }
    return (

        <li className="favouritesItem" onClick={handleFavBtnClick}>
            <div className="beerImg">
                <img src={beer.image_url} alt="beer img" />
            </div>
            <p className="beerName">{beer.name}</p>

        </li>
    )
}

export default FavouritesItem
