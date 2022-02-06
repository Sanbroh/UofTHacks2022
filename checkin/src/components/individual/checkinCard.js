import React from 'react';
import './checkinCard.css'
import { NavLink as Link } from 'react-router-dom';

const CheckInCard = () => {
  return (
    <div class="checkin-body">
      <h1 class="signin-title">Check In</h1>
      <p class="signin-subtitle">Become an active volunteer right now!</p>
      <h5 class="guest-knowledge">You cannot get online messages as a guest.<br/>Don't worry, we can link with you on SMS instead!</h5>
      <form>
        <input class="phone-input-box" type="text" maxlength="10" id="phone-number" name="phone-number" placeholder="+X (XXX)-XXX-XXX"></input><br /><br />
        <Link to="/sign-in"><p class="no-account">Have an account? Log in here!</p></Link>
        <p class="no-account">Powered by Twilio.</p>
        <input type="submit" id="button-submit" value="Check In" style={{ marginTop: '1.5em' }}></input>
      </form>
    </div>
  );
};

export default CheckInCard;
