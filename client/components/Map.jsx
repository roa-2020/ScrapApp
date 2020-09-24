import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,
    width: '100%',
    height: '1000px',
    zoom: 10
  })
  return (
  // <div>
    <ReactMapGL 
      {...viewport}
      mapboxApiAccessToken={'pk.eyJ1Ijoic2NyYXBwIiwiYSI6ImNrZmY3Y2ltMzBhbWoydm9rdGk2bGw3bWEifQ.wKdEATteeGosG3h7PuAKMw'}
      mapStyle="mapbox://styles/scrapp/ckfg9se0g20sk19lhef5gsyqg"
      onViewportChange={viewport => {
        setViewport(viewport)
        console.log(viewport)
      }}
      >
      markers here
    </ReactMapGL>
    // </div>
  )
}

