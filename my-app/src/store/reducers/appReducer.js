const SET_IS_INITIALIZED = 'app/SET-IS-INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const setIsInitialized = () => ({type: SET_IS_INITIALIZED});

export default appReducer;
