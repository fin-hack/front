import {usersAPI} from "../../utils/api";

const SET_IS_AUTH = 'userData/SET-IS-AUTH';
const SET_IS_FETCHING = 'userData/SET-IS-FETCHING';
const SET_USER_DATA = 'userData/SET-USER-DATA';
const SET_PROGRESS = 'userData/SET-PROGRESS';
const SET_IS_FETCHING_PROGRESS = 'userData/SET-IS-FETCHING-PROGRESS';
const SET_CHART = 'userData/SET-CHART';
const SET_IS_FETCHING_CHART = 'userData/SET-IS-FETCHING-CHART';
const SET_KEY = 'userData/SET-KEY';

let initialState = {
    isAuth: false,
    isFetching: false,
    userData: null,
    isFetchingProgress: false,
    progress: null,
    chart: null,
    isFetchingChart: false,
    key: null,
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
        case SET_IS_FETCHING_CHART:
            return {
                ...state,
                isFetchingChart: action.isFetching
            };
        case SET_CHART:
            return {
                ...state,
                chart: action.chart
            };
        case SET_KEY:
            return {
                ...state,
                key: action.key
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
export const setChart = (chart) => ({type: SET_CHART, chart});
export const setIsFetchingChart = (isFetching) => ({type: SET_IS_FETCHING_CHART, isFetching});
export const setKey = (key) => ({type: SET_KEY, key});


export const getUserData = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUserData();
    dispatch(setUserData(data));
    dispatch(setIsFetching(false));
};

export const getUserProgress = () => async (dispatch) => {
    dispatch(setIsFetchingProgress(true));
    const data = await usersAPI.getValues();
    dispatch(setProgress(data));
    dispatch(setIsFetchingProgress(false));
};

export const getChart = () => async (dispatch) => {
    dispatch(setIsFetchingChart(true));
    const data = await usersAPI.getChart((new Date()).getDate());
    dispatch(setChart(data));
    dispatch(setIsFetchingChart(false));
};

export default userDataReducer;