import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import setAuthToken from "./services/setAuthToken";
import Login from "./displays/Login";
import SignUp from "./displays/SignUp";
import Home from "./displays/Home";
import Alert from "./components/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <div className="container">
      <Provider store={reduxStore}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
        <Alert />
      </Provider>
    </div>
  );
};

export default App;
