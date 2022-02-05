import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/index';
import About from './components/pages/about';
import Communities from './components/pages/communities';
import Opportunities from './components/pages/opportunities';
import Profile from './components/pages/profile';
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
        <Route path='/profile' element={<Profile/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
