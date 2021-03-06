import beerTypes from './beers.types'

const INITAL_STATE = {
    favourites: [],
    toggleFavs: false,
    beerDetails: {},
    beers: [],
}

const beerReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case beerTypes.CLEAR_BEERnFAVS_ON_SIGN_OUT:
            return ({
                ...state,
                ...INITAL_STATE
            })
        case beerTypes.TOGGLE_FAVS:
            return ({
                ...state,
                toggleFavs: !state.toggleFavs
            })
        case beerTypes.SHOW_BEER_DETAILS:
            return ({
                ...state,
                beerDetails: action.payload
            })
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