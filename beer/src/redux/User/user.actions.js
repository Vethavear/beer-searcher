import userTypes from './user.types'
export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const signInStart = userCredentials => ({
    type: userTypes.SIGN_IN_START,
    payload: userCredentials
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: userTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userTypes.SIGN_OUT_SUCCESS
})

export const signUpStart = userCredentials => ({
    type: userTypes.SIGN_UP_START,
    payload: userCredentials

})

export const userError = err = ({
    type: userTypes.USER_ERROR,
    payload: err
})




