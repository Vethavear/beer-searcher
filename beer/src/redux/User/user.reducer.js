import userTypes from './user.types';

const INITAL_STATE = {
    currentUser: null,
    userErr: [],
};

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userErr: []
            }
        case userTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                ...INITAL_STATE
            }
        case userTypes.ERROR:
            return {
                ...state,
                userErr: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;