import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup, GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import scrapData from './static-scrap-data.json'
import { connect } from "react-redux";
import { apiGetScraps } from "../apis/scrap.js";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { deleteScrap } from '../actions/scraps'

class Map extends React.Component {

  state = {
    selectedScrap: null,
    viewport: {
      latitude: -41.294105529785156,
      longitude: 174.7752685546875,
      width: "100vw",
      height: "100vh",
      zoom: 15,
    }
  }

  viewportChange = (viewport) => {
    this.setState({ viewport })
  }

  changeScrap = (scrap) => {
    this.setState({ selectedScrap: scrap })
  }

  deleteScrap = (id) => {
    this.props.dispatch(deleteScrap(id))
    this.changeScrap(null)
  }

  render() {

    const selectedScrap = this.state.selectedScrap

    return (
      <div id="map">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/scrapp/ckfg9se0g20sk19lhef5gsyqg"

          onViewportChange={this.viewportChange}
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            //on page load centre on user
            auto={true}
          />
          {scrapData.map((scrap) => (

            <Marker
              key={scrap.id}
              latitude={scrap.latitude[0]}
              longitude={scrap.longitude[0]}
            >
              <button className="marker-btn"
                onClick={e => {
                  e.preventDefault()

                  this.changeScrap(scrap)
                }}
              >
                <img src='/images/Scrap_icon.png' alt="scrap icon"></img>
              </button>
            </Marker>
          ))}

          {selectedScrap && (
            <Popup
              latitude={selectedScrap.latitude[0]}
              longitude={selectedScrap.longitude[0]}
              onClose={() => {
                // this.changeScrap(null)
              }}
            >

              <div>
                <p className="title is-5">{selectedScrap.scrap_name}</p>
                <p className="title is-6">Category: {selectedScrap.category}</p>
                <p className="subtitle is-6">{selectedScrap.description}</p>
                <button className="button is-danger"
                  onClick={() => {
                    this.deleteScrap(selectedScrap.id);
                  }}>scrap gone</button>
              </div>
            </Popup>
          )}

        </ReactMapGL>
      </div >
    )
  }
}
const mapStateToProps = ({ auth, scraps }) => {
  return {
    auth,
    scraps
  }
}

export default connect(mapStateToProps)(Map)