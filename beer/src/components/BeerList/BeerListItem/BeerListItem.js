import React from 'react'
import './beerListItem.scss'
const BeerListItem = ({beer, renderBeerDetails}) => {
    return (
        <div className="beerListItem" onClick={() => renderBeerDetails(beer)}>
            <h2 className="beerName">{beer.name}</h2>
            <div className="beerImg">
                <img src={beer.image_url} alt="beerImg" />
            </div>
        </div>
    )
}

export default BeerListItem
