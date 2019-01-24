import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import{ LoginForm } from "./login/components/LoginForm";
import {RegistrationForm } from './registration/components/RegistrationForm'
import store from './store';

import './styleBody.css';

ReactDOM.render(
    <Provider store = {store}>
        <Router history = {hashHistory}>
        <Route path = "/" component={LoginForm}> </Route>
        <Route path ="/register" component={RegistrationForm}></Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
