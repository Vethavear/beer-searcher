import { all, call } from 'redux-saga/effects'

import userSagas from './User/user.sagas'
import beerSagas from './Beers/beers.sagas'

export default function* rootSaga() {
    yield all([call(userSagas),
    call(beerSagas)])
}