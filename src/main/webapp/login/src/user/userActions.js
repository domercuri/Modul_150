import {USER_SET} from './userTypes';

export const set = (value, attribute) => ({
    type: USER_SET,
    payload: {
        value,
        path: attribute,
    },
})