import './beerList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBeersStart, showBeerDetails } from '../../redux/Beers/beer.actions'
import React, { useEffect } from 'react'
import BeerListItem from './BeerListItem/BeerListItem'
import BeerDetails from '../BeerDetails/BeerDetails'



const BeerList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBeersStart())
    }, [])
    const beersFromState = useSelector(({ beers }) => beers.beers)
    console.log(beersFromState)

    const beerDetails = useSelector(({ beers }) => beers.beerDetails)
    console.log(beerDetails)

    const addBeerDetailsToState = (beerDetails) => {
        dispatch(showBeerDetails(beerDetails))
    }

    if (beerDetails !== undefined) {
        return (
            <BeerDetails beer={beerDetails}></BeerDetails>
        )
    }

    return (
        < div className="beerList" >
            {beersFromState.map(beerData => <BeerListItem beer={beerData} key={beerData.id} renderBeerDetails={addBeerDetailsToState}></BeerListItem>)}
        </div >
    )
}

export default BeerList
