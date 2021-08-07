import React from "react";
import Form from "./../components/common/form";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

class Register extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errorMessage: "",
    errors: {},
    isLoading: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password").min(8),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
  };

  doSubmit = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = this.state;

      await auth.register(data);
      toast.success("Account created successfully");
      this.props.history.push("/login");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        let { message } = ex.response.data;
        this.setState({ errorMessage: message });
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row vertical-center justify-content-center">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body m-3">
                <h3 className="text-center">Register Account</h3>
                {this.state.errorMessage && (
                  <p className="text-warning text-center font-weight-bold">
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    {this.state.errorMessage}
                  </p>
                )}
                <form onSubmit={this.handleSubmit}>
                  {this.renderInput("username", "Username")}
                  {this.renderInput("email", "Email")}
                  {this.renderInput("password", "Password", "password")}
                  {this.renderSubmitButton("Register", this.state.isLoading)}
                  {/* <button
                    className="btn btn-block btn-primary pull-right"
                    disabled={this.validate()}
                  >
                    Register
                  </button> */}
                </form>
                <p className="text-muted text-center mt-2">
                  Existing user? <Link to="/login"> Login </Link>
                </p>
              </div>
            </div>
            <p className="text-muted text-center">&copy; Copyright 2021 </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
