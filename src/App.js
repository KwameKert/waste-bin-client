import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ProtectedRoute from "./components/common/protectedRoute";
import Main from "./components/layouts/Main";
import Register from "./pages/Register";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
          <ProtectedRoute path="/app" component={Main} />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
