import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import DefaultLayer from "./components/layouts/Default";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={DefaultLayer} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
