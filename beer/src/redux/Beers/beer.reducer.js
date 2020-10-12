import beerTypes from './beers.types'

const INITAL_STATE = {
    favourites: [],
    beers: [],
}

const beerReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case beerTypes.GET_ALL_BEERS_SUCCEED:
            return {
                ...state,
                beers: action.payload
            }
            case beerTypes.SHOW_BEER_DETAILS:
                return {
                    ...state,
                    beerDetails: action.payload
                }
            default:
                return state;
    }
}
export default beerReducer