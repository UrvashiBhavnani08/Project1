import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './authActions';

// Reducers
const authInitialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') || false,
    user: {
        username: localStorage.getItem('username') || null,
        email: localStorage.getItem('email') || null,
        signature: localStorage.getItem('signature') || null,
        role: localStorage.getItem('role') || null,
    },
    error: null,
};

const authReducer = (state = authInitialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                error: null,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;