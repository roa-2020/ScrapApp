import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { createRef } from 'react'
import ReactMapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import { connect } from "react-redux"
import { setLocation } from "../actions/newScrap";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

class FormGeocode extends React.Component {
  constructor(props) {
  super()
  this.mapRef = createRef();
  this.geocoderContainerRef = createRef();
  }

  state = {
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,

  }
  
  viewportChange = (viewport) => {
    this.setState({ viewport });
  };

  viewportChangeGeocoder = (viewport) => {
    const lat = viewport.latitude
    const lng = viewport.longitude
    console.log(viewport)
    this.props.dispatch(setLocation(lat, lng))
  };



  render() {
      return (
      <div style={{ width: "100%" }}>
        <div
          ref={this.geocoderContainerRef}
          style={{ width: '100%'}}
        />
        <ReactMapGL
          ref={this.mapRef}
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/scrapp/ckfg9se0g20sk19lhef5gsyqg"
          onViewportChange={this.viewportChange}
        />
          <Geocoder
            mapRef={this.mapRef}
            containerRef={this.geocoderContainerRef}
            onViewportChange={this.viewportChangeGeocoder}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
            countries="nz"
            placeholder="Wheres the pickup?"
          />
        
        </div>
    );
  };
}

function mapStateToProps(globalState) {
  return { scraps: globalState.scraps };
};

export default connect(mapStateToProps)(FormGeocode)
