import React from 'react';
import './login.css'
import { NavLink as Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class="signin-body">
      <h1 class="signin-title">Sign In</h1>
      <p class="signin-subtitle">Login with your credentials!</p>
      <form>
        <input class="input-box" type="text" id="email" name="email" placeholder="Email or Username"></input><br /><br />
        <input class="input-box" type="text" id="password" name="password" placeholder="Password"></input><br /><br />
        <Link to="/sign-up"><p class="no-account">No account? Sign up here!</p></Link>
        <p class="forgot-password">Forgot your password?</p>
        <input type="submit" id="button-submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Login;
