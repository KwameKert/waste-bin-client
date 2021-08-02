import React from "react";
import Form from "./../components/common/form";
import Joi from "joi-browser";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  render() {
    return (
      <div className="container">
        <div className="row vertical-center justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="text-center">Sign in to Account</h3>
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "Username")}
                  {this.renderInput("password", "Password", "password")}
                  <button
                    className="btn btn-block btn-primary pull-right"
                    disabled={this.validate()}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
            <p class="text-muted text-center">&copy; Copyright 2021 </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
