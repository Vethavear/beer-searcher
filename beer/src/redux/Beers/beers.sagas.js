import { addFav, getFavs, deleteFav } from '../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { addFavSucceed, deleteFavSucceed, getFavsSucceed } from './beer.actions'
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

function* addBeerToFavourite({ payload: beer }) {

    yield addFav(beer)
    yield put(addFavSucceed(beer));
}
function* deleteBeerFromFavourite({ payload: beer }) {

    yield deleteFav(beer)
    yield put(deleteFavSucceed(beer));
}

function* onAddBeerToFavouriteStart() {
    try {
        yield takeLatest(beerTypes.ADD_FAV_START, addBeerToFavourite)
    } catch (err) { console.log(err) }
}
function* onDelBeerToFavouriteStart() {
    yield takeLatest(beerTypes.DEL_FAV_START, deleteBeerFromFavourite)
}

function* onGetFavsStart() {
    yield takeLatest(beerTypes.GET_FAVS_START, getFavouriteBeers)
}
function* getFavouriteBeers() {
    yield put(getFavsSucceed(yield getFavs()))
}


export default function* beerSagas() {
    yield all([
        call(getAllBeersStart),
        call(onAddBeerToFavouriteStart),
        call(onDelBeerToFavouriteStart),
        call(onGetFavsStart)])
}
