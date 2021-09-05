import {usersAPI} from "../../utils/api";

const initialState = {
    personal: null,
    teams: null,
    isFetching: false,
};

const SET_PERSONAL = 'leaderboard/SET-PERSONAL';
const SET_TEAMS = 'leaderboard/SET-TEAMS';
const SET_IS_FETCHING = 'leaderboard/SET-IS-FETCHING';


const leaderboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PERSONAL:
            return {
                ...state,
                personal: action.personal
            };
        case SET_TEAMS:
            return {
                ...state,
                teams: action.teams
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
};

export const setPersonal = (personal) => ({type: SET_PERSONAL, personal});
export const setTeams = (teams) => ({type: SET_TEAMS, teams});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const getPersonalLeaderboard = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getLeaderboard();
    dispatch(setPersonal(data.leaderboard));
    dispatch(setIsFetching(false));
};

export const getTeamsLeaderboard = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getLeaderboard();
    dispatch(setTeams(data.leaderboard));
    dispatch(setIsFetching(false));
};

export default leaderboardReducer;