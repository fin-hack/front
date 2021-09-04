import {usersAPI} from "../../utils/api";

const SET_IS_AUTH = 'userData/SET-IS-AUTH';
const SET_IS_FETCHING = 'userData/SET-IS-FETCHING';
const SET_USER_DATA = 'userData/SET-USER-DATA';
const SET_IS_FETCHING_PROGRESS = 'progress/SET-IS-FETCHING';
const SET_PROGRESS = 'progress/SET-PROGRESS';

let initialState = {
    isAuth: false,
    isFetching: false,
    userData: null,
    isFetchingProgress: false,
    progress: null,
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_IS_FETCHING_PROGRESS:
            return {
                ...state,
                isFetchingProgress: action.isFetching
            };
        case SET_PROGRESS:
            return {
                ...state,
                progress: action.progress
            };
        default:
            return state;
    }
};

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setUserData = (userData) => ({type: SET_USER_DATA, userData});
export const setIsFetchingProgress = (isFetching) => ({type: SET_IS_FETCHING_PROGRESS, isFetching});
export const setProgress = (progress) => ({type: SET_PROGRESS, progress});

export const getUserData = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUserData();
    dispatch(setUserData(data));
    dispatch(setIsFetching(false));
};

export const getUserProgress = () => async (dispatch) => {
    dispatch(setIsFetchingProgress(true));
    const data = await usersAPI.getValues();
    setTimeout(() => {
        dispatch(setProgress(data));
        dispatch(setIsFetchingProgress(false));
    }, 1000);
};

export default userDataReducer;