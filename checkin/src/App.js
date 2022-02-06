import React, { Component } from "react";
import './App.css';
import Navbar from './components/Navbar';
import AuthService from "./services/auth.service";
import Footer from './components/individual/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/index';
import About from './components/pages/about';
import Communities from './components/pages/communities';
import Opportunities from './components/pages/opportunities';
import Profile from './components/pages/profile';
import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';
import CheckIn from './components/pages/check-in';
import { NavLink as Link } from 'react-router-dom';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  LogoLink,
} from './components/Navbar/NavbarElements';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
      return (
        <Router>
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
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-link">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div class="topnav-right">
                  <div class="sign-in">
                    <NavLink to="/sign-in">Sign In</NavLink>
                  </div>
                  <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
                </div>
              )}
          </div>
        </>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/communities' element={<Communities/>} />
            <Route path='/opportunities' element={<Opportunities/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/check-in' element={<CheckIn/>} />
            <Route path='/sign-in' element={<SignIn/>} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
        </Router>
      );
    }
}

export default App;
