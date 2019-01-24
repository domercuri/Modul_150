import { CHANGE_FORM } from '../registrationTypes';

const initialState = {
    name: null, 
    vorname: null, 
    geschlecht: null, 
    benutzername: null, 
    password: null,
    email: null, 
    adresse: null, 
    postleizahl: null,
    ort: null, 
};

export const registrationFormDataReducer = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_FORM:{
            return Object.assign({}, action.payload);
        }
        default: return state;
    }
}