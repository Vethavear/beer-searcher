import './beerList.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAllBeersStart } from '../../redux/Beers/beer.actions'
import React, { useEffect } from 'react'

const BeerList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBeersStart())
    }, [])
    const beersFromState = useSelector(({beers}) => beers.beers)
    console.log(beersFromState)
    
    return (
        <div className="beerList">
            {/* {beers.map(beer => <Beer data={beer} />)} */}

            
        </div>
    )
}

export default BeerList
