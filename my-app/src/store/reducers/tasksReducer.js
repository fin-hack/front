import {teamAPI} from "../../utils/api";

const initialState = {
    tasks: null,
    isFetching: false,
};

const SET_IS_FETCHING = 'tasks/SET-IS-FETCHING';
const SET_TASKS = 'tasks/SET-TASKS';

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks,
            };
        default:
            return state
    }
};

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setTasks = (tasks) => ({type: SET_IS_FETCHING, tasks});

export const getTasks = (id) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const res = await teamAPI.getTasks(id);
    console.log(res);
    dispatch(setIsFetching(false));
};

export default tasksReducer;
