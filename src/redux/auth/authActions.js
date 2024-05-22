import axios from "axios"
// Actions
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userid', res.data.userId);
        localStorage.setItem('username', res.data.username);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('signature', res.data.signature);
        localStorage.setItem('role', res.data.role)
        console.log(res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('email');
        localStorage.removeItem('username');
        localStorage.removeItem('signature');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        dispatch({ type: LOGOUT_SUCCESS });
        window.location.reload()
    } catch (err) {
        //   console.error(err);
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: err.response.data.message || 'Unknown error',
        });
    }
};