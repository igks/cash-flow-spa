import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import setAuthToken from "./services/setAuthToken";
import Login from "./displays/Login";
import SignUp from "./displays/SignUp";
import Home from "./displays/Home";
import Alert from "./components/Alert";
import PrivateRoute from "./displays/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute exact path="/home" component={Home} />
            <Redirect exact path="/" to="/login" />
          </Switch>
        </Fragment>
      </Router>
      <Alert />
    </Provider>
  );
};

export default App;
