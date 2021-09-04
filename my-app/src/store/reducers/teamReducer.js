import {teamAPI} from "../../utils/api";

let initialState = {
    teamData: null,
    users: null,
    isFetching: false,
};

const SET_IS_FETCHING = 'teamData/SET-IS-FETCHING';
const SET_TEAM_DATA = 'teamData/SET-TEAM-DATA';


const teamReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TEAM_DATA:
            return {
                ...state,
                teamData: action.teamData.team,
                users: action.teamData.users
            };
        default:
            return state;
    }
};

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setTeamData = (teamData) => ({type: SET_TEAM_DATA, teamData});

export const getTeamData = (id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await teamAPI.getTeamData(id);
    if (data) {
        dispatch(setTeamData(data));
    }
    dispatch(setIsFetching(false));
};

export default teamReducer;
