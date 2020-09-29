import React, { createRef, } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import scrapData from "./static-scrap-data.json";
import { connect } from "react-redux";
import { apiGetScraps, apiDeleteScraps } from "../apis/scrap.js";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Footer from './Footer'
import Header from './Header'

import Geocoder from "react-map-gl-geocoder";
import { deleteScrap } from "../actions/scraps";
import { getAllScraps } from "../actions/scraps";
import { setLocation } from "../actions/newScrap";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faDrumstickBite, faCouch, faTshirt, faDumpsterFire, faShoePrints, faBowlingBall } from '@fortawesome/free-solid-svg-icons'


class Map extends React.Component {
  constructor(props) {
    super()
    this.mapRef = createRef();
  }

  state = {
    selectedScrap: null,
    viewport: {
      latitude: -41.294105529785156,
      longitude: 174.7752685546875,
      width: "100vw",
      height: "100vh",
      zoom: 13
    },
  };

  viewportChange = (viewport) => {
    this.setState({ viewport });
  };

  viewportChangeGeocoder = (viewport) => {
    const lat = viewport.latitude
    const lng = viewport.longitude
    console.log(viewport)
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
  getScrapIcon = (category) => {
    switch (category) {
      case 'Food':
        return faDrumstickBite;
      case 'Furniture':
        return faCouch
      case 'Clothes':
        return faTshirt;
      case 'Shoes':
        return faShoePrints;
      case 'Sports':
        return faBowlingBall;
      case 'Stuff':
      default:
        return faDumpsterFire

    }
  }

  //Controls zoom level when clicking on geolocate button
  _onViewportChange = (viewport) => {
    viewport.zoom = 15 //Whatever zoom level you want
    this.setState({ viewport })
    console.log("changing _onViewportChange")
  }

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
            placeholder="Add your location!"
            countries="nz"
          />

          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            //on page load centre on user
            auto={true}
            onViewportChange={this._onViewportChange}
          />

          {
            this.props.scraps.map((scrap) => (
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
                  <FontAwesomeIcon icon={this.getScrapIcon(scrap.category)} size="2x" className="nav-icon" />
                </button>
              </Marker>
            ))
          }

          {selectedScrap && (
            <Popup
              latitude={selectedScrap.latitude}
              longitude={selectedScrap.longitude}
              closeOnClick={false}
              onClose={() => {
                this.changeScrap(null)
              }}

            >
              <div className="popup">
                <p className="title is-6">
                  {selectedScrap.scrap_name} - {selectedScrap.category} <span>
                    <FontAwesomeIcon icon={faDrumstickBite} size="1x" className="nav-icon" />
                  </span>
                </p>
                <p className="subtitle is-6">{selectedScrap.description}</p>
                <p className="subtitle is-7">{selectedScrap.address.split(' ').slice(0, 6).join(' ')}</p>
                <button
                  className="button is-danger is-small"
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
