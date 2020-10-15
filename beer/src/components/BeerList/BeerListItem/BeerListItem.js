import React from 'react';
import './beerListItem.scss';
import FavouritesStar from '../../Favourites/FavouritesStar/FavouritesStar';
const BeerListItem = ({ beer, renderBeerDetails }) => {
    return (
        <div className="beerListItemWrapper">
            <div className="beerListItem" onClick={() => renderBeerDetails(beer)}>
                <h2 className="beerName">{beer.name}</h2>
                <div className="beerImg">
                    <img src={beer.image_url} alt="beerImg" />
                </div>
            </div>
            <FavouritesStar favedBeer={beer}></FavouritesStar>
        </div>

    )


}

export default BeerListItem
