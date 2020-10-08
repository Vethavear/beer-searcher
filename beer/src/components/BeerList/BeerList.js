import './beerList.scss'
import { useDispatch, } from 'react-redux'
import { getAllBeersStart } from '../../redux/Beers/beer.actions'
import React, { useEffect, useState } from 'react'
import BeerListItem from './BeerListItem/BeerListItem'
import BeerDetails from '../BeerDetails/BeerDetails'
import axios from 'axios'




const BeerList = () => {
    const [beerDetails, setBeerDetails] = useState(undefined);
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers/`).then(result => {
            return setBeers(result.data)
        }).catch(error => console.log(error));
    }, [])

    if (beerDetails !== undefined) {
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
