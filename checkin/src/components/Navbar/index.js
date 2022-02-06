import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoLink,
} from './NavbarElements';
import './index.css';
import './base.css';

const Navbar = () => {
  return (
    <>
      <div class="topnav bg-highlight">
        <div class="topnav-left">
          <Link to="/">
            <img class="logo" src="https://cdn.discordapp.com/attachments/936477557237379144/939685270469627924/output-onlinepngtools.png" />
          </Link>
          <div class="links">
            <NavLink class="navlink opportunities nanum white" to="/opportunities">Opportunities</NavLink>
            <NavLink class="navlink communities nanum white" to="/communities">Communities</NavLink>
          </div>
        </div>
        <div class="topnav-right">
          <div class="sign-in">
            <NavLink to="/sign-in">Sign In</NavLink>
          </div>
          <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
