import {combineReducers} from 'redux';
import {REGISTRATION} from '../registrationTypes'
import {createStatusReducer} from '../../../commons/reducers/createStatusReducer';
import {registrationFormDataReducer} from './registrationFormDataReducer';

export const registrationFormReducer = combineReducers({
    data: registrationFormDataReducer,
    status: createStatusReducer(REGISTRATION)
})