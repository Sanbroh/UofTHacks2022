import React, { Component } from 'react';
import './opportunityCard.css'

const OpportunityCard = ({
  number,
  image,
  spots,
  max,
  categories,
  locationName,
  locationType,
  locationAddress,
  locationEmail,
  locationPhone,
  locationTime,
  last
}) => {
  const activities = [];

  for (let i = 0; i < number; i++) {
    activities.push(
      <div class="opportunityCard-body">
        <div class="opportunityCard-img">
          <img src={image} />
        </div>
        <div class="opportunityCard-text">
          <div class="opportunityCard-description">
            <h1>{locationName}</h1>
            <h2>({locationType})</h2>
            <h3>Address: {locationAddress}</h3>
            <h3>Email: {locationEmail}</h3>
            <h3>Phone: {locationPhone}</h3>
            <h3>Open: {locationTime}</h3>
          </div>
          <div class="opportunityCard-info">
            <h4>Volunteers Needed: {spots}/{max}</h4>
            <h4>Categories: {categories}</h4>
          </div>
        </div>
        <div class="opportunityCard-btn">
          <button>Volunteer</button>
          <button>Bookmark</button>
        </div>
      </div>
    );
  };

  if (number >= 10 || last) {
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

export default OpportunityCard;
