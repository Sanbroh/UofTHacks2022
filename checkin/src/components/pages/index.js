import React from 'react';
import './resources/index.css'
import Footer from '../individual/footer'
import { NavLink as Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      style={{
        height: '100vh',
        marginTop: '4em',
        backgroundColor: '#f4f1de',
        width: '100vw',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: -1,
      }}
    >
      <div
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.25)),url("https://cdn.pixabay.com/photo/2021/11/06/00/32/volunteer-6772196_1280.jpg")',
          filter: 'blur(0px)',
          height: '100vh',
          width: '100vw',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div
          style={{
            width: '40em',
            height: '20em',
            margin: 'auto',
            paddingTop: '30vh'
          }}
        >
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'oxygen, sans-serif',
              fontWeight: 'bolder',
              color: 'white',
              fontSize: '42px',
          }}>
            Share the good with <i>everyone</i>.
          </h1>
          <h2
            style={{
              textAlign: 'center',
              fontFamily: 'oxygen, sans-serif',
              fontWeight: 'normal',
              color: 'white',
              fontSize: '18px',
              marginTop: '2em'
          }}>
            See where you are needed right now.
          </h2>
          <Link to="/opportunities">
            <button
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '2em',
              }}
              class="opportunities-button"
            >
              Browse Opportunities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
