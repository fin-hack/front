import {usersAPI} from "../../utils/api";

const initialState = {
    personal: [
        {
            'id': 1,
            'model': 'OpUser',
            'fields': {
                'mail': 'polich@fufu.com',
                'first_name': 'Andrey',
                'last_name': 'Kulikov',
                'score': '1200',
                'money': '100',
                'token': '1221',
                'password': '2112',
                '_team': null,
                'docs_count': '4',
                'attention': null,
                'impression': null,
                'stress_tolerance': ''
            }
        },
        {
            'id':1,
            'model':'OpUser',
            'fields':{
                'mail':'polich@fufu.com',
                'first_name':'lalal',
                'last_name':'lalal',
                'score':'1300',
                'money':'100',
                'token': '121',
                'password': '2112',
                '_team': null,
                'docs_count': '4',
                'attention': null,
                'impression': null,
                'stress_tolerance': ''
            }
        },
        {
            'id':1,
            'model':'OpUser',
            'fields':{
                'mail':'polich@fufu.com',
                'first_name':'srrdzy',
                'last_name':'laldzrzdral',
                'score':'1400',
                'money':'100',
                'token': '21',
                'password': '2112',
                '_team': null,
                'docs_count': '4',
                'attention': null,
                'impression': null,
                'stress_tolerance': ''
            }
        }
    ],
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
    dispatch(setPersonal(data));
    dispatch(setIsFetching(false));
};

export default leaderboardReducer;