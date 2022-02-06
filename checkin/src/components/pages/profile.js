import React from 'react';
import Footer from '../individual/footer'
import Profile from '../authentication/profile.component'

const ProfilePage = () => {
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
        padding: '6vh 4vw'
      }}
    >
      <Profile />
    </div>
  );
};

export default ProfilePage;
