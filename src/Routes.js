import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
