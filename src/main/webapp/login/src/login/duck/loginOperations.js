import axios from 'axios';
import { hashHistory } from 'react-router';
import {changeForm, loginPending, loginSuccess, loginFailed} from './loginActions';
export const loginChangeForm = changeForm;

export const login = (username, password) =>{
    return(dispatch)=> {
        dispatch(loginPending());
        axios.post("http://localhost:8080/user/login", {
            username,
            password
        }).then((response) => {
            if(!response.data){
                console.log("ERROR");
                dispatch(loginFailed({message: "Bitte überprüfen Sie ihre Eingaben"}))
            }else{
                dispatch(loginSuccess((response.data)))
                hashHistory.push('/profile')
            }
        }).catch((error)=>{
            dispatch(loginFailed({message: `Login Fehlgeschlagen: ${error.toString()}`}))
        });
    };
};

export const logout = () =>{
    return(dispatch) => {
        dispatch(loginSuccess(null));
    }
}