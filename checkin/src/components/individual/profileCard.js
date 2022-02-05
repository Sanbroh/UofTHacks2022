import React from 'react';
import './profileCard.css'

const ProfileCard = ({
  name,
  email,
  status,
  volunteerNum,
  followerNum,
  followingNum,
  profileImage,
}) => {
  return (
    <div class="card-body">
      <img class="user-image" src={profileImage} />
      <div class="card-text">
        <h1 class="name">{name}</h1>
        <p class="email">({email})</p>
        <h2 class="status">{status}</h2>
      </div>
      <div class="grid">
        <div class="grid-box left">
          <h1 class="number">{volunteerNum}</h1>
          <p class="description">Checked In</p>
        </div>
        <div class="grid-box center">
          <h1 class="number">{followerNum}</h1>
          <p class="description">Followers</p>
        </div>
        <div class="grid-box right">
          <h1 class="number">{followingNum}</h1>
          <p class="description">Followings</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
