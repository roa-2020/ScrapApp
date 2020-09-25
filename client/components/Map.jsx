import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup }from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import scrapData from './static-scrap-data.json'
import { connect } from "react-redux";
import { apiGetScraps } from "../apis/scrap.js";
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function Map() {

  const [viewport, setViewport] = useState({
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  })
  
  const [selectedScrap, setSelectedScrap] = useState(null);

  return (
    <div id="map">
    <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/scrapp/ckfg9se0g20sk19lhef5gsyqg"
      onViewportChange={viewport => {
        setViewport(viewport)
      }}
      >
        {scrapData.map((scrap) => (

            <Marker 
              key={scrap.id}
              latitude={scrap.latitude[0]}
              longitude={scrap.longitude[0]}
            >
              <button className="marker-btn" 
                onClick={e => {
                  e.preventDefault()
                  setSelectedScrap(scrap)
                }}
              >
                <img src='/images/Scrap_icon.png'alt="scrap icon"></img>
              </button>
            </Marker>
        ))}

        {selectedScrap && (
          <Popup 
            latitude={selectedScrap.latitude[0]} 
            longitude={selectedScrap.longitude[0]}
            onClose={() => {
              setSelectedScrap(null)
            }}
          >

            <div>
              <p className="title is-5">{selectedScrap.scrap_name}</p>
              <p className="title is-6">Category: {selectedScrap.category}</p>
              <p className="subtitle is-6">{selectedScrap.description}</p>
            </div>

          </Popup>
        )}

    </ReactMapGL>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Map)