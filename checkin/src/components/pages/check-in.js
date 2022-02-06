import React from 'react';
import Footer from '../individual/footer'
import CheckInCard from '../individual/checkinCard'
import './resources/communities.css'
import { NavLink as Link } from 'react-router-dom';

const CheckIn = () => {
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
      <CheckInCard />
      <Footer />
    </div>
  );
};

export default CheckIn;
