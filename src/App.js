import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
//import DefaultLayer from "./components/layouts/Default";
import Main from "./components/layouts/Main";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Main} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
