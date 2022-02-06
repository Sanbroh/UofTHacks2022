import React from 'react';
import ProfileCard from '../individual/profileCard'
import OppoButton from '../individual/oppoButton'
import GoogleMap from '../individual/googleMap'
import MapTimeLine from '../individual/mapTimeLine'
import CurrentTime from '../individual/currentTime'
import OpportunityCard from '../individual/opportunityCard'
import Footer from '../individual/footer'
import './resources/opportunities.css'
import { NavLink as Link } from 'react-router-dom';

const Opportunities = () => {
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
      <div class="title">
        <h1>Browse Opportunities</h1>
      </div>
      <div style={{ display: 'inline-block' }}>
        <ProfileCard
          name="Thomas Tesselaar"
          email="tthomas2@gmail.com"
          status="Volunteer"
          volunteerNum="32"
          followerNum="1"
          followingNum="2"
          profileImage="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        />
        <div class="profile-mask">
          <h1>You're not logged in!</h1>
          <h2>Sign in now to access your records.</h2>
          <Link to="/sign-in"><button>Sign In</button></Link>
        </div>
        <div style={{ marginTop: '1em' }}>
          <OppoButton name="Check In Now"/>
        </div>
        <div style={{ marginTop: '1em' }}>
          <OppoButton name="Volunteer History"/>
        </div>
      </div>
      <div class="google-map outlined">
        <div class="map-container">
          <GoogleMap />
        </div>
      </div>
      <div class="google-map-timeline outlined">
        <CurrentTime />
        <MapTimeLine />
      </div>
      <div class="requests outlined">
        <div class="requests-nav">
          <img class="btn-sort" src="https://cdn-icons-png.flaticon.com/512/25/25612.png" />
          <div class="requests-nav-title">
            <h1>Opportunities</h1>
          </div>
          <img class="btn-search" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" />
        </div>
        <OpportunityCard spots={5} max={8} categories="Cleaning, Chatting" number={10} image={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/103_Hanover.jpg/1200px-103_Hanover.jpg'} />
      </div>
      <Footer />
    </div>
  );
};

export default Opportunities;
