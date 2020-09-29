import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { createRef } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import { connect } from 'superagent'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

class FormGeocode extends React.Component {
  constructor(props) {
  super(props)
  this.mapRef = createRef();
  this.geocoderContainerRef = createRef();
  }

  state = {
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,
  }
  
  render() {
      return (
      <div style={{ width: "100%" }}>
        <div
          ref={this.geocoderContainerRef}
          style={{ width: '100%'}}
        />
          <Geocoder
            mapRef={this.mapRef}
            containerRef={this.geocoderContainerRef}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
            countries="nz"
          />
        </div>
    );
  };
}

// function mapStateToProps(globalState) {
//   return { scraps: globalState.scraps };
// };

export default FormGeocode;
