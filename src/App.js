import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Login />
      </React.Fragment>
    );
  }
}

export default App;
