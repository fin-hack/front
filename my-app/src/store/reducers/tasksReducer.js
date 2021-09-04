import {teamAPI} from "../../utils/api";

const initialState = {
    tasks: null,
    tasksStatus: null,
    isFetching: false,
};

const SET_IS_FETCHING = 'tasks/SET-IS-FETCHING';
const SET_TASKS = 'tasks/SET-TASKS';
const SET_TASKS_STATUS = 'tasks/SET-TASKS-STATUS';

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_TASKS_STATUS:
            return {
                ...state,
                tasksStatus: action.status,
            };
        default:
            return state
    }
};

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const setTasksStatus = (status) => ({type: SET_TASKS_STATUS, status});

export const getTasks = (id, status) => async (dispatch) => {
    dispatch(setIsFetching(true));
    const res = await teamAPI.getTasks(id, status);
    setTimeout(() => {
        if (res.teamtask) {
            dispatch(setTasks(res.teamtask));
            dispatch(setTasksStatus(status));
        }
        dispatch(setIsFetching(false));
    }, 1000);

};

export default tasksReducer;
