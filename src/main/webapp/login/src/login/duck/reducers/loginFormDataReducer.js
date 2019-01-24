import { CHANGE_FORM } from '../loginTypes';

const initialState = {
    username: null,
    password: null,
};

export const loginFormDataReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_FORM: {
            return Object.assign({}, action.payload);
        }
        default: return state;
    }
}