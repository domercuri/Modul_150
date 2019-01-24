import React from 'react';
import {connect} from 'react-redux';
import {registrationChangeForm, register, validatePassword} from '../duck';
import {Navigation} from '../../navigation/Navigation';

const RegistrationForm = ({validate, name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort, changForm, performRegistration, status, pwConfirm}) =>{
    const handleFormSubmit = (e) =>{
        performRegistration(name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort);
    }

    document.title = "Registration";

    return(
        <div>
            <Navigation />
            <form className= "registration" >
                <center>
                    <h2 className = "title">Registrieren</h2>
                    {status.error && <span className = "error">
                        {status.error.message}
                    </span>}
                     <br/>

                     <input className = "inputStyle"
                     type = "text"
                     placeholder = "Name"
                     onChange = {(e) => changForm(e.target.value, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort)}
                     required/>

                    <br/>

                    <input className = "inputStyle"
                     type = "text"
                     placeholder = "Vorname"
                     onChange = {(e) => changForm(name, e.target.value, geschlecht, benutzername,password, email, adresse, postleizahl,ort)}
                     required/>

                     <br/>

                     <select
                     className = "inputStyle"
                     placeholder = "Geschlecht"
                     required
                     onChange =  {(e) => changForm(name, vorname, e.target.value, benutzername,password, email, adresse, postleizahl,ort)}
                     >
                        <option value = "M">Männlich</option>
                        <option value = "W">Weiblich</option>
                     </select>

                     <br />

                    <input className = "inputStyle"
                     type = "text"
                     placeholder = "Benutzername"
                     onChange = {(e) => changForm(name, vorname, geschlecht, e.target.value, password, email, adresse, postleizahl,ort)}
                     required/>

                     <br/>

                    <input className = "inputStyle"
                     type = "password"
                     placeholder = "Password"
                     onChange = {(e) => changForm(name, vorname, geschlecht, benutzername,e.target.value, email, adresse, postleizahl,ort)}
                     minLength = "8"
                     maxLength = "10"
                     required/>

                     <br/>


                    <input className = "inputStyle"
                     type = "password"
                     placeholder = "Password Bestätigen"
                     onBlur = {(e) => validate(password, e.target.value)}
                     minLength = "8"
                     maxLength = "10"
                     required/>

                     <br/>

                    <input className = "inputStyle"
                     type = "email"
                     placeholder = "E-Mail"
                     onChange = {(e) => changForm(name, vorname, geschlecht, benutzername,password, e.target.value, adresse, postleizahl,ort)}
                     required/>

                     <br/>

                    <input className = "inputStyle"
                     type = "text"
                     placeholder = "Adresse"
                     onChange = {(e) => changForm(name, vorname, geschlecht, benutzername,password, email, e.target.value, postleizahl,ort)}
                     required/>

                     <br/>

                    <input className = "inputStyle"
                     type = "text"
                     placeholder = "PLZ"
                     onChange = {(e) => changForm(name, vorname, geschlecht, benutzername,password, email, adresse, e.target.value,ort)}
                     required
                     minLength = "4"
                     maxLength = "4"/>

                     <br/>

                    <input className = "inputStyle"
                     type = "text"
                     placeholder = "Ort"
                     onChange = {(e) => changForm(name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,e.target.value)}
                     required/>

                    <br/>
                        <button className = "button" onClick = {handleFormSubmit}>
                            Registrieren   
                        </button>
                     <br/>
                </center>
            </form>
        </div>
    )
}

const mapStateToProps = (store) =>({
    name: store.app.registrationForm.data.name,
    vorname: store.app.registrationForm.data.vorname,
    geschlecht: store.app.registrationForm.data.geschlecht,
    benutzername: store.app.registrationForm.data.benutzername,
    password: store.app.registrationForm.data.password,
    email: store.app.registrationForm.data.email,
    adresse: store.app.registrationForm.data.adresse,
    postleizahl: store.app.registrationForm.data.postleizahl,
    ort: store.app.registrationForm.data.ort,
    status: store.app.registrationForm.status,
});

const dispatchStateToProps = (dispatch) => ({
    changForm: (name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort) =>
    dispatch(registrationChangeForm(name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort)),

    performRegistration: (name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort) =>
    dispatch(register(name, vorname, geschlecht, benutzername,password, email, adresse, postleizahl,ort)),

    validate: (password, passwordConfirm) =>
    dispatch(validatePassword(password, passwordConfirm)),
});

const connected = connect(mapStateToProps, dispatchStateToProps)(RegistrationForm);

export{
    connected as RegistrationForm,
    RegistrationForm as RegistrationFormDisconnected,
}