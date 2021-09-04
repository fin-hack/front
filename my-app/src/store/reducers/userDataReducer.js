import {usersAPI} from "../../utils/api";

const SET_IS_AUTH = 'userData/SET-IS-AUTH';
const SET_IS_FETCHING = 'userData/SET-IS-FETCHING';
const SET_USER_DATA = 'userData/SET-USER-DATA';

let initialState = {
    isAuth: false,
    isFetching: false,
    userData: null,
};

const userDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.userData
            };
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
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});

export const getUserData = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUserData();
    setTimeout(() => {
        dispatch(setUserData(data));
        dispatch(setIsFetching(false));
    }, 1000);
};

export default userDataReducer;