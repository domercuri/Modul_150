import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import { Navigation } from '../../navigation/Navigation';
import {loginChangeForm, login } from '../duck';

const LoginForm = ({username, password, changeForm, performLogin, status}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        performLogin(username, password);
        changeForm(null, null);
    }

    document.title = "login";

    return(
        <div>
            <Navigation />
        <form className="login">
        <center>
            <h2 className = "title">Login</h2>
                {status.error && <span className = "error">
                    {status.error.message}
                </span>}
            <br/>

            <label>
                <input className = "inputStyle" type = "text"
                onChange={(e) => changeForm(e.target.value, password)} placeholder="Benutzername"
                required/>
            </label>
            <p />

            <label>
                <input className = "inputStyle" type = "password"
                onChange={(e) => changeForm(username, e.target.value)} placeholder="Password"
                required/>
            </label>
            <br/>
            <button className = "button" onClick = {handleFormSubmit}>
                 Login   
            </button>
            <br/>
            <h3>Noch nicht Registriert ?</h3>
            <Link to="/register">Registrieren</Link>
        </center>
        </form>
        </div>
    )
}

const mapStateToProps = (store) => ({
    username: store.app.loginForm.data.username,
    password: store.app.loginForm.data.password,
    status: store.app.loginForm.status
});

const mapDispatchToProps = (dispatch) =>({
    changeForm: (username, password) => dispatch(loginChangeForm(username,password)),
    performLogin: (username, password) => dispatch(login(username, password)),
});

const connected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export{
    connected as LoginForm,
    LoginForm as LoginFormDisconnected,
}