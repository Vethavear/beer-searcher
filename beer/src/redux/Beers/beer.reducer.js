import beerTypes from './beers.types'

const INITAL_STATE = {
    favourites: [],
    beers: [],
}

const beerReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case beerTypes.GET_FAVS_SUCCEED:
            return ({
                ...state,
                favourites: action.payload
            });
        case beerTypes.ADD_FAV_SUCCEED:
            return ({
                ...state,
                favourites: [...state.favourites, action.payload]
            });
        case beerTypes.DEL_FAV_SUCCEED:
            return ({
                ...state,
                favourites: state.favourites.filter(el => el !== action.payload)
            })
        default:
            return state;
    }
}
export default beerReducer