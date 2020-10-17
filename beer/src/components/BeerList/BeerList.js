import './beerList.scss'
import React from 'react'
import BeerListItem from './BeerListItem/BeerListItem'
import BeerDetails from '../BeerDetails/BeerDetails'
import { useDispatch, useSelector } from 'react-redux'
import { showBeerDetails } from '../../redux/Beers/beer.actions'




const BeerList = ({beers}) => {
    const dispatch = useDispatch();
    const beerDetails = useSelector(state => state.beers.beerDetails);
 
    const setBeerDetails = (beer) => {
        dispatch(showBeerDetails(beer))
    }
    if (beerDetails.hasOwnProperty('name')) {
        return (
            <BeerDetails beer={beerDetails} changeBeerDetails={setBeerDetails}></BeerDetails>
        )
    }

    return (
        < div className="beerList" >
            {beers.map(el => <BeerListItem beer={el} key={el.id} renderBeerDetails={setBeerDetails}></BeerListItem>)}
        </div >
    )
}

export default BeerList
