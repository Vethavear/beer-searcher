import { combineReducers } from 'redux'

import userReducer from './User/user.reducer'
import beerReducer from './Beers/beer.reducer'


export default combineReducers({

    user: userReducer,
    beers: beerReducer
})