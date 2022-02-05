import React, { Component } from 'react';
import './currentTime.css'

var date = Date().toLocaleString()

const CurrentTime = () => {
  return (
    <div>
      <p>
        {date}
      </p>
    </div>
  );
};

export default CurrentTime;
