import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import loginPageReducer from './reducers/loginPageReducer';
import { reducer as formReducer } from 'redux-form';
import thunkMW from 'redux-thunk';
import appReducer from "./reducers/appReducer";
import userDataReducer from "./reducers/userDataReducer";
import teamReducer from "./reducers/teamReducer";
import tasksReducer from "./reducers/tasksReducer";
import leaderboardReducer from "./reducers/leaderboardReducer";

const reducers = combineReducers({
    app: appReducer,
    userData: userDataReducer,
    teamData: teamReducer,
    loginPage: loginPageReducer,
    tasks: tasksReducer,
    leaderboard: leaderboardReducer,
    form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

window.__store__ = store;

export default store;