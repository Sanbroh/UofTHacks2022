import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './googleMap.css';

const CurrentLocation = () => {
  return(
    <div class="current-radius">
      <img style={{ width: '2em', height: '2em' }} src="https://freesvg.org/img/kuba_arrow_button_set_1.png" />
    </div>
  );
};

const RadiusZone = () => {
  return (
    <div class="other-radius"></div>
  );
};

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.2312,
      lng: -76.4860
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBAKPOeC2Fm828Hfe4tBJ_4ZVjcZn0A3Gw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <CurrentLocation
            lat={44.2312}
            lng={-76.4860}
          />
          <RadiusZone
            lat={44.307989}
            lng={-76.578140}
          />
          <RadiusZone
            lat={44.295539}
            lng={-76.593497}
          />
          <RadiusZone
            lat={44.214228}
            lng={-76.514053}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
