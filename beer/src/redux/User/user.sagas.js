import userTypes from './user.types'
import { takeLatest, call, all, put } from 'redux-saga/effects'
import { auth, handleUserProfile, getCurrentUser } from './../../firebase/utils'
import { signInSuccess, signOutSuccess, userError } from './user.actions'

export function* getSnapshotFromUserAuth(user) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user })
        const snapshot = yield userRef.get();
        yield put(signInSuccess(
            {
                id: snapshot.id,
                ...snapshot.data()
            }
        ))
    }
    catch (err) { console.log(err) }
}
export function* signIn({ payload: { login, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(login, password);
        yield getSnapshotFromUserAuth(user)



    } catch (err) {
    }
}

export function* onSignInStart() {
    yield takeLatest(userTypes.SIGN_IN_START, signIn)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (err) { console.log(err) }
}
export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(
            signOutSuccess()
        )
    } catch (err) { console.log(err) }
}

export function* onSignOutStart() {
    yield takeLatest(userTypes.SIGN_OUT_START, signOut)
}

export function* signUp({
    payload: {
        login,
        password,
        confirmPassword
    }

}) {
    if (password !== confirmPassword) {
        const err = ['Password don\'t match!'];
        yield put(
            userError(err)
        )
        // dispatch({
        //     type: userTypes.SIGN_UP_ERROR,
        //     payload: err
        // })
        return;

    }
    try {
        const { user } = await auth.createUserWithEmailAndPassword(login, password);
        await handleUserProfile(user);
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })

    } catch (err) {
        console.log(err)
    }
}

export function* onSignUpStart() {
    takeLatest(userTypes.SIGN_UP_START, signUp)
}

export default function* userSagas() {
    yield all([call(onSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart)])
}
