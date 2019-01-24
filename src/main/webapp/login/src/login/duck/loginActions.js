import {CHANGE_FORM, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED} from './loginTypes';

export const changeForm = (username, password) =>({
    type: CHANGE_FORM,
    payload:{
        username,
        password
    },
});

export const loginPending = () => ({
    type: LOGIN_PENDING,
})

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailed = (error) => ({
    type: LOGIN_FAILED,
    error,
})