import React, { useState } from 'react'
import ReactMapGL, { Marker }from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import scrapData from './static-scrap-data.json'
import { connect } from "react-redux";
import { apiGetScraps } from "../apis/scrap.js";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,
    width: "100vw",
    height: "100vh",
    zoom: 10,

  })
  return (
    <div id="map">
    <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={'pk.eyJ1Ijoic2NyYXBwIiwiYSI6ImNrZmY3Y2ltMzBhbWoydm9rdGk2bGw3bWEifQ.wKdEATteeGosG3h7PuAKMw'}
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
            <button className="marker-btn">
              <img src='/images/Scrap_icon.png'alt="scrap icon"></img>
            </button>
          </Marker>
        ))}
    </ReactMapGL>
    </div>
  )
}

