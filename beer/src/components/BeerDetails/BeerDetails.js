import React from 'react'
import './beerDetails.scss'
import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import FavouritesStar from '../Favourites/FavouritesStar/FavouritesStar'

const BeerDetails = ({ beer, changeBeerDetails }) => {

    return (
        <div className="beerDetails">
            <header className="beerDetailsHeader">
                <h2 className="beerName">
                    {beer.name}
                </h2>
                <button className="beerDetailsBackButton" onClick={() => {
                    changeBeerDetails({})
                }}>
                    <IconContext.Provider value={{ className: 'arrowIcon' }}>
                        <IoIosArrowRoundBack></IoIosArrowRoundBack>
                    </IconContext.Provider>
                    Go Back</button>
            </header>
            <ul className="beerDetailsList">
                <li className="beerDetailsListItem">

                </li>
                <li className="beerDetailsListItem">
                    <FavouritesStar favedBeer={beer}></FavouritesStar>
                    <h3 className="title">Yeast</h3>
                    <div className="content">
                        <p className="contentItem">
                            {beer.ingredients.yeast}
                        </p>
                    </div>
                </li>
                <li className="beerDetailsListItem">
                    <h3 className="title">Hops</h3>
                    <div className="content">
                        {beer.ingredients.hops.map((el, index) =>
                            <p className="contentItem" key={index}>{el.name} - {el.amount.value} {el.amount.unit}</p>
                        )}
                    </div>
                </li>
                <li className="beerDetailsListItem">
                    <h3 className="title">Malt</h3>
                    <div className="content">
                        {beer.ingredients.malt.map((el, index) =>
                            <p className="contentItem" key={index}>{el.name} - {el.amount.value} {el.amount.unit}</p>
                        )}
                    </div>
                </li>
                <li className="beerDetailsListItem">
                    <h3 className="title">Recommended food</h3>
                    <div className="content">
                        {beer.food_pairing.map((el, index) =>
                            <p className="contentItem" key={index}>{el}</p>
                        )}
                    </div>
                </li>
            </ul>
            <div className="beerImg">
                <img src={beer.image_url} alt="Beer img"
                />
            </div>
        </div>
    )
}

export default BeerDetails
