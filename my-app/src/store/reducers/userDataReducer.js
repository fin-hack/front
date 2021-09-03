const SET_IS_AUTH = 'userData/SET-IS-AUTH';

let initialState = {
    isAuth: false,
};

const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth,
            };
        default:
            return state;
    }
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

export default userDataReducer;