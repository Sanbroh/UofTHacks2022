import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import './auth.css';
import { NavLink as Link } from 'react-router-dom';
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleLogin(e) {
    e.preventDefault();
    this.setState({
      message: "",
      loading: true
    });
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          const navigate = useNavigate();
          navigate("/profile");
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <h1 class="signin-title">Sign In</h1>
          <p class="signin-subtitle">Login with your credentials!</p>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                class="creds-input-box"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                class="creds-input-box"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                placeholder="Password"
              />
            </div>
            <br />
            <Link to="/sign-up"><p class="no-account">No account? Sign up here!</p></Link>
            <p class="forgot-password">Forgot your password?</p>
            <br />
            <div className="form-group">
              <button
                id="button-submit"
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
