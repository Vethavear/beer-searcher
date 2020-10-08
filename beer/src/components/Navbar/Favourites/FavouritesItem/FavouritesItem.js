import React from 'react'

const FavouritesItem = (beer) => {
    return (
        <li className="favouritesItem">
            <p className="beerName">{beer.name}</p><div className="beerImg"><img src={beer.image_url} alt="beer img" /></div>
        </li>
    )
}

export default FavouritesItem
