import React, { Component } from 'react';
import './communityCard.css'

const CommunityCard = ({
  number,
  image
}) => {
  const activities = [];

  for (let i = 0; i < number; i++) {
    activities.push(
      <div class="communityCard-body">
        <div class="communityCard-img">
          <img src={image} />
        </div>
        <div class="communityCard-text">
          <h1>Daily Bread Food Bank</h1>
          <h2>(Food Bank)</h2>
          <h3>Address: 191 New Toronto St, Etobicoke, ON M8V 2E7</h3>
          <h3>Email: volunteer@dailybread.ca</h3>
          <h3>Phone: 416-203-0050</h3>
          <h3>Open: 8:30AM - 4:30PM (Closed Weekends)</h3>
        </div>
        <div class="communityCard-btn">
          <button>Volunteer</button>
          <button>Bookmark</button>
        </div>
      </div>
    );
  };

  if (number >= 10) {
    activities.push(
      <button class="view-more">View More</button>
    );
  };

  return (
    <div>
      {activities}
    </div>
  );
};

export default CommunityCard;
