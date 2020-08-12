import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./displays/Login";
import SignUp from "./displays/SignUp";
import Home from "./displays/Home";

function App() {
  return (
    <div className="container">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
