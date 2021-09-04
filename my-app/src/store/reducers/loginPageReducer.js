import {authAPI} from "../../utils/api";
import {setIsAuth} from "./userDataReducer";
import {setApiKey} from "../../utils/apiKeyManager";

const SET_IS_FETCHING = 'loginPage/set-is-fetching';

const initialState = {
    isFetching: false,
};

const loginPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const login = (email, password, mood) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const res = await authAPI.login(email, password, mood);
    if (res.key) {
        setApiKey(res.key);
        dispatch(setIsAuth(true));
    }
    dispatch(setIsFetching(false));
};

export const logout = () => (dispatch) => {
    dispatch(setIsAuth(false));
};

export default loginPageReducer;