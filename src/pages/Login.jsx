import React from "react";
import Form from "./../components/common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    errorMessage: "",
    isLoading: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password").min(8),
  };

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  doSubmit = async () => {
    try {
      this.setState({ isLoading: true, errorMessage: "" });
      const { data } = this.state;
      await auth.login(data);
      this.props.history.push("/app/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let { message } = ex.response.data;
        this.setState({ errorMessage: message });
        console.log(this.state);
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  renderErrorMessage = () => {
    if (this.state.errorMessage) {
      return (
        <p className="text-danger text-center font-weight-bold">
          <FontAwesomeIcon icon={faExclamationTriangle} />
          {this.state.errorMessage}
        </p>
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row vertical-center justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body m-3">
                <h3 className="text-center">Sign in to Account</h3>
                {this.renderErrorMessage()}
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "Username")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderSubmitButton("Login", this.state.isLoading)}
                </form>
              </div>
            </div>
            <p className="text-muted text-center">&copy; Copyright 2021 </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
