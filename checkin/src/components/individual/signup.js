import React from 'react';
import './signup.css'

const Signup = () => {
  return (
    <div class="signup-body">
      <h1 class="signup-title">Sign Up</h1>
      <p class="signup-subtitle">Join the community!</p>
      <form>
        <input class="input-box" type="text" id="username" name="username" placeholder="Username"></input><br /><br />
        <input class="input-box" type="text" id="email" name="email" placeholder="Email Address"></input><br /><br />
        <input class="input-box" type="text" id="password" name="password" placeholder="Password"></input><br /><br />
        <input class="input-box" type="text" id="confirm-password" name="confirm-password" placeholder="Confirm Password"></input><br /><br />
        <p class="privacy-confirm">☑ By clicking Submit, you agree to our privacy policy.</p>
        <input type="submit" id="button-submit" value="Create Account"></input>
      </form>
    </div>
  );
};

export default Signup;
