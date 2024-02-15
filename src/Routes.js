import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';

function Routes() {
    return (
        <Router>
            <div>
                <Route exact path="/">
                    <SignIn />
                </Route>
                <Route path="/login">
                    <App />
                </Route>
            </div>
        </Router>
    );
}

export default Routes;
