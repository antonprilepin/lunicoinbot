import React, { useEffect, useState } from 'react';
import './SignIn.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function SignIn() {

    return (
        <Switch>
            <Route path="/login">
                <div>
                    <h1>PETUH</h1>
                </div>
            </Route>
        </Switch>
    );
}

export default SignIn;