import {
    CHANGE_FORM,
    REGISTRATION,
    REGISTRATION_PENDING,
    REGISTRATION_SUCCESS,
    REGSITRATION_FAILED
} from "./registrationTypes"

export const changeForm = ( name, vorname, geschlecht, benutzername, password, email, adresse, postleizahl,ort ) => ({
    type: CHANGE_FORM,
    payload:{
        name,
        vorname,
        geschlecht,
        benutzername,
        password,
        email,
        adresse,
        postleizahl,
        ort
    },
});

export const registrationPending = () =>({
    type: REGISTRATION_PENDING,
});

export const registrationSuccess = () => ({
    type: REGISTRATION_SUCCESS,
});

export const registrationFailed = (error) => ({
    type: REGSITRATION_FAILED,
    error,
})