import userTypes from './user.types'
import { auth, handleUserProfile } from './../../firebase/utils'
export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const signInUser = ({ login, password }) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(login, password);
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch (err) {
    }
}

export const signUpUser = ({login, password, confirmPassword}) => async dispatch => {
    if (password !== confirmPassword) {
        const err = ['Password don\'t match!'];
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        return;

    }
          try {
            const { user } = await auth.createUserWithEmailAndPassword(login, password);
            await handleUserProfile(user);
            dispatch({
                type:userTypes.SIGN_UP_SUCCESS,
                payload: true
            })
  
        } catch (err) {
            console.log(err)
        }
}