import React from 'react';
import ProfileCard from '../individual/profileCard'
import OppoButton from '../individual/oppoButton'
import CommunityCard from '../individual/communityCard'
import Footer from '../individual/footer'
import './resources/communities.css'
import { NavLink as Link } from 'react-router-dom';

const Communities = () => {
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
        <h1>Browse Communities</h1>
      </div>
      <div class="profile-mask">
        <h1>You're not logged in!</h1>
        <h2>Sign in now to access your records.</h2>
        <Link to="/sign-in"><button>Sign In</button></Link>
      </div>
      <div class="force-move-profile" style={{ display: 'inline-block' }}>
        <ProfileCard
          name="Thomas Tesselaar"
          email="thomastesselaar6@gmail.com"
          status="Volunteer"
          volunteerNum="32"
          followerNum="1"
          followingNum="2"
          profileImage="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        />
        <div style={{ marginTop: '1em' }}>
          <Link to="/check-in"><OppoButton name="Check In Now"/></Link>
        </div>
        <div style={{ marginTop: '1em' }}>
          <OppoButton name="Volunteer History"/>
        </div>
      </div>
      <div class="requests outlined communities">
        <div class="requests-nav">
          <img class="btn-sort" src="https://cdn-icons-png.flaticon.com/512/25/25612.png" />
          <div class="requests-nav-title">
            <h1>Communities</h1>
          </div>
          <img class="btn-search" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png" />
        </div>
        <CommunityCard number={2} image={'https://cdn.logojoy.com/wp-content/uploads/2018/05/30171740/1645.png'} />
      </div>
      <Footer />
    </div>
  );
};

export default Communities;
