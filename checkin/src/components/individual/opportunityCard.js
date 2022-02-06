import React, { Component } from 'react';
import './opportunityCard.css'

const OpportunityCard = ({
  number,
  image,
  spots,
  max,
  categories
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
            <h1>Northeastern Estate Care Centre</h1>
            <h2>(Senior Care Centre)</h2>
            <h3>Address: 14 York St. East, Toronto, L7T I8O</h3>
            <h3>Email: neecares@gmail.com</h3>
            <h3>Phone: 647-887-9829</h3>
            <h3>Open: 9AM - 7PM (10AM - 5PM Sundays)</h3>
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

export default OpportunityCard;
