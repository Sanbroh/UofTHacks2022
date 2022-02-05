import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.651070,
      lng: -79.347015
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
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
