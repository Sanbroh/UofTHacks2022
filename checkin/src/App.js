import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/individual/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/index';
import About from './components/pages/about';
import Communities from './components/pages/communities';
import Opportunities from './components/pages/opportunities';
import ProfilePage from './components/pages/profile';
import SignIn from './components/pages/sign-in';
import SignUp from './components/pages/sign-up';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/communities' element={<Communities/>} />
        <Route path='/opportunities' element={<Opportunities/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
