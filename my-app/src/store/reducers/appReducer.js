const SET_IS_INITIALIZED = 'app/SET-IS-INITIALIZED';
const SET_NOTIFICATIONS_OPENED = 'app/SET_NOTIFICATIONS_OPENED';
const SET_NOTIFICATIONS_ACTIVE = 'app/SET_NOTIFICATIONS_ACTIVE';

let initialState = {
    initialized: false,
    notificationsOpened: false,
    notificationsActive: true,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                initialized: action.isInitialized
            };
        case SET_NOTIFICATIONS_OPENED:
            return {
                ...state,
                notificationsOpened: action.notificationsOpened
            };
        case SET_NOTIFICATIONS_ACTIVE:
            return {
                ...state,
                notificationsActive: action.notificationsActive
            };
        default:
            return state;
    }
};

export const setIsInitialized = (isInitialized) => ({type: SET_IS_INITIALIZED, isInitialized});
export const setNotificationsActive = (notificationsActive) => ({type: SET_NOTIFICATIONS_ACTIVE, notificationsActive});
export const setNotificationsOpened = (notificationsOpened) => ({type: SET_NOTIFICATIONS_OPENED, notificationsOpened});

export default appReducer;
