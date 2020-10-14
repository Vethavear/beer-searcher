import './beerList.scss'
import React, { useEffect, useState } from 'react'
import BeerListItem from './BeerListItem/BeerListItem'
import BeerDetails from '../BeerDetails/BeerDetails'
import { useDispatch, useSelector } from 'react-redux'
import { showBeerDetails } from '../../redux/Beers/beer.actions'
import axios from 'axios'




const BeerList = () => {
    // const [beerDetails, setBeerDetails] = useState(undefined);
    const [beers, setBeers] = useState([]);
    const dispatch = useDispatch();
    const beerDetails = useSelector(state => state.beers.beerDetails);
 
    const setBeerDetails = (beer) => {
        dispatch(showBeerDetails(beer))
    }

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers/`).then(result => {
            return setBeers(result.data)
        }).catch(error => console.log(error));
    }, [])

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
