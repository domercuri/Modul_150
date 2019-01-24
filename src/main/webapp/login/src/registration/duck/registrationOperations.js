import axios from 'axios';
import { hashHistory } from 'react-router';
import {
    changeForm,
    registrationPending,
    registrationSuccess,
    registrationFailed
} from "./registrationActions";

export const registrationChangeForm = changeForm;

export const validatePassword = (passowrd, passwordConfirm) =>{
    return (dispatch) => {
        if(passwordConfirm === passowrd){
            dispatch(registrationPending());
        }
        else{
            dispatch(registrationFailed({message: "Die Eingegebenen Passwärter müssen gleich sein"}));
        }
    }
};

export const register = (name, vorname, geschlecht, benutzername, passoword, email, adresse, postleizahl,ort ) =>{
    return (dispatch) => {
        console.log(passoword);
        dispatch(registrationPending());
        console.log(passoword);
        axios.put("http://localhost:8080/user/register", {
            passoword,
            name,
            vorname,
            geschlecht,
            benutzername,
            email, 
            adresse,
            postleizahl,
            ort
        }).then((response) =>{
       
             if (response.data.toString === 'Success'){
                dispatch(registrationSuccess());
                hashHistory.push("/");
            }
            else{
                dispatch(registrationFailed({message: response.data}));

            }
        }).catch((error) => {
            dispatch(registrationFailed({message: error.toString()}));
        });
    };
};

