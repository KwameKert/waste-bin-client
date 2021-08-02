import React, { Component } from "react";
import Navbar from "../Navbar";

class DefaultLayer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <p className="lead">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            magnam, voluptatem atque possimus nisi accusantium! Rerum asperiores
            eius dicta, amet sapiente corporis! Qui voluptatibus optio ratione
            fugit fugiat earum commodi.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default DefaultLayer;
