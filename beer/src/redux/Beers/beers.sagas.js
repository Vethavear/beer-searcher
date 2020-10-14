import { getFavs } from '../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import {getAllBeersSucceed} from './beer.actions'
import beerTypes from './beers.types'
import axios from 'axios'


function* getBeer(id) {
    axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(beer => {

    }).catch(err => console.log('no beer'));
}


function* getAllBeers() {
    // try {
    //     const response = yield axios.get(`https://api.punkapi.com/v2/beers/`);
    //     yield put(getAllBeersSucceed(response.data))
    // }
    // catch (err) { console.log(err) }
}

export function* getAllBeersStart() {
    yield takeLatest(beerTypes.GET_ALL_BEERS_START, getAllBeers)
}
function* searchBeersWithFilters() {

}

function* addBeerToFav() {

}

function* deleteBeerFromFav() {

}

function* getFavouriteBeers() {

}


export default function* beerSagas() {
    yield all([
        call(getAllBeersStart)])
}
