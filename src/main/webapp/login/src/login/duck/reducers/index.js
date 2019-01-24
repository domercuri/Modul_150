import { combineReducers } from 'redux';
import { LOGIN } from '../loginTypes';
import { createStatusReducer } from '../../../commons/reducers/createStatusReducer';
import { loginFormDataReducer } from  './loginFormDataReducer';

export const loginFormReducer = combineReducers({
    data: loginFormDataReducer,
    status: createStatusReducer(LOGIN),
})
