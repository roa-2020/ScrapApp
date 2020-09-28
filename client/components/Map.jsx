import React, { createRef, } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import scrapData from "./static-scrap-data.json";
import { connect } from "react-redux";
import { apiGetScraps, apiDeleteScraps } from "../apis/scrap.js";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header'

import Geocoder from "react-map-gl-geocoder";
import { deleteScrap } from "../actions/scraps";
import { getAllScraps } from "../actions/scraps";
import { setLocation } from "../actions/newScrap";


class Map extends React.Component {
  constructor(props) {
    super(props)
    this.mapRef = createRef();
  }

  state = {
    selectedScrap: null,
    viewport: {
      latitude: -41.294105529785156,
      longitude: 174.7752685546875,
      width: "100vw",
      height: "100vh",
      zoom: 15,
    },
  };

  viewportChange = (viewport) => {
    this.setState({ viewport });
  };

  viewportChangeGeocoder = (viewport) => {
    const lat = viewport.latitude
    const lng = viewport.longitude
    console.log(lat, lng)
    this.props.dispatch(setLocation(lat, lng))

    this.setState({ viewport });
  };

  changeScrap = (scrap) => {
    this.setState({ selectedScrap: scrap });
  };

  deleteScrap = (id) => {
    this.props.dispatch(deleteScrap(id));
    apiDeleteScraps(id);
    this.changeScrap(null);
  };

  render() {
    const selectedScrap = this.state.selectedScrap;
    return (
      <div id="map">
        <ReactMapGL
          ref={this.mapRef}
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/scrapp/ckfg9se0g20sk19lhef5gsyqg"
          onViewportChange={this.viewportChange}
        >

          <Geocoder
            mapRef={this.mapRef}
            onViewportChange={this.viewportChangeGeocoder}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position="top-right"
          />

          <Header
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            //on page load centre on user
            auto={true} />

          {this.props.scraps.map((scrap) => (
            <Marker
              key={scrap.id}
              latitude={scrap.latitude}
              longitude={scrap.longitude}
            >
              <button
                className="marker-btn"
                onClick={(e) => {
                  e.preventDefault();
                  this.changeScrap(scrap);
                }}
              >
                <img src="/images/Scrap_icon.png" alt="scrap icon"></img>
              </button>
            </Marker>
          ))}

          {selectedScrap && (
            <Popup
              latitude={selectedScrap.latitude}
              longitude={selectedScrap.longitude}
              closeOnClick={false}
              onClose={() => {
                this.changeScrap(null)
              }}

            >
              <div>
                <p className="title is-6">
                  {selectedScrap.scrap_name} - {selectedScrap.category}
                </p>
                <p className="subtitle is-6">{selectedScrap.description}</p>
                <button
                  className="button is-danger"
                  onClick={() => {
                    this.deleteScrap(selectedScrap.id);
                  }}
                >
                  scrap gone
                </button>
              </div>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    );
  }
}
function mapStateToProps(globalState) {
  return { scraps: globalState.scraps };
}

export default connect(mapStateToProps)(Map);
