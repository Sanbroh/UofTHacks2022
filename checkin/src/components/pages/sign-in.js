import React from 'react';
import Footer from '../individual/footer'
import Signin from '../individual/login'
import Login from '../authentication/login.component'

const SignIn = () => {
  return (
    <div
    style={{
      marginTop: '2em',
      backgroundColor: '#f4f1de',
      width: '100vw',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: -1,
      padding: '10vh 4vw'
      }}
    >
      <Login />
      <Footer />
    </div>
  );
};

export default SignIn;
