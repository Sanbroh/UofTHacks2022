import React from 'react';
import ProfileCard from '../individual/profileCard'
import OppoButton from '../individual/oppoButton'
import CommunityCard from '../individual/communityCard'
import Footer from '../individual/footer'

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
      <div style={{ display: 'inline-block' }}>
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
          <OppoButton name="Check In"/>
        </div>
        <div style={{ marginTop: '1em' }}>
          <OppoButton name="Volunteer History"/>
        </div>
      </div>
      <div class="requests outlined">
        <div class="requests-nav">

        </div>
        <CommunityCard number={10} image={'https://cdn.logojoy.com/wp-content/uploads/2018/05/30171740/1645.png'} />
      </div>
      <Footer />
    </div>
  );
};

export default Communities;
