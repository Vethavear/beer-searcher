import beerTypes from './beers.types'

export const showBeerDetails = (beerDetails) => ({
    type: beerTypes.SHOW_BEER_DETAILS,
    payload: beerDetails
})
export const toggleFavs = () => ({
    type: beerTypes.TOGGLE_FAVS,
})
export const getFavsStart = () => ({
    type: beerTypes.GET_FAVS_START,
})
export const getFavsSucceed = (favourities) => ({
    type: beerTypes.GET_FAVS_SUCCEED,
    payload: favourities
})
export const clearBeerAndFavsOnSignOut = () => ({
    type: beerTypes.CLEAR_BEERnFAVS_ON_SIGN_OUT,
})
export const addFavStart = (beer) => ({
    type: beerTypes.ADD_FAV_START,
    payload: beer
})
export const addFavSucceed = (beer) => ({
    type: beerTypes.ADD_FAV_SUCCEED,
    payload: beer
})
export const deleteFavStart = (beer) => ({
    type: beerTypes.DEL_FAV_START,
    payload: beer
})
export const deleteFavSucceed = (beer) => ({
    type: beerTypes.DEL_FAV_SUCCEED,
    payload: beer
})