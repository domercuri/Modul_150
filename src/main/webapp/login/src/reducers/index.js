 import {combineReducers} from 'redux';
 import user from '../user/userReducer';
 import {loginFormReducer} from '../login/index';
 import {registrationFormReducer} from '../registration/';

 const appReducer = combineReducers({
     loginForm: loginFormReducer,
     registrationForm: registrationFormReducer
});

 const dataReducer = combineReducers({
     user,
 });

 export default combineReducers({
     data: dataReducer,
     app: appReducer
 });
 