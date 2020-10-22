import { addFav, getFavs, deleteFav } from '../../firebase/utils'
import { takeLatest, put, all, call } from 'redux-saga/effects'
import { addFavSucceed, deleteFavSucceed, getFavsSucceed } from './beer.actions'
import beerTypes from './beers.types'



function* deleteBeerFromFavourite({ payload: beer }) {

    yield deleteFav(beer);
    yield put(deleteFavSucceed(beer));
}

function* onAddBeerToFavouriteStart() {
    try {
        yield takeLatest(beerTypes.ADD_FAV_START, addBeerToFavourite)
    } catch (err) { console.log(err) }
}

function* addBeerToFavourite({ payload: beer }) {

    yield addFav(beer);
    yield put(addFavSucceed(beer));
}
function* onDelBeerToFavouriteStart() {
    yield takeLatest(beerTypes.DEL_FAV_START, deleteBeerFromFavourite)
}

function* onGetFavsStart() {
    try {
        yield takeLatest(beerTypes.GET_FAVS_START, getFavouriteBeers)
    } catch (err) {
        console.log(err)
    }
}
function* getFavouriteBeers() {
    try {

        const favs = yield call(getFavs);
        yield put(getFavsSucceed(favs));
    } catch (err) {
        console.log('error w sadze')
        console.log(err)
        yield put(getFavsSucceed([]))
    }
}

export default function* beerSagas() {
    yield all([
        call(onAddBeerToFavouriteStart),
        call(onDelBeerToFavouriteStart),
        call(onGetFavsStart)])
}
