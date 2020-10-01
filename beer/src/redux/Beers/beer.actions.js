import beerTypes from './beers.types'

export const getAllBeersSucceed = (beers) => ({
    type: beerTypes.GET_ALL_BEERS_SUCCEED,
    payload: beers
})

export const getAllBeersStart = () => ({
    type: beerTypes.GET_ALL_BEERS_START,
})