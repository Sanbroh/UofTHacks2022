import React from 'react';
import Footer from '../individual/footer'
import Signup from '../individual/signup'
import Register from '../authentication/register.component'

const SignUp = () => {
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
      <Register />
      <Footer />
    </div>
  );
};

export default SignUp;
