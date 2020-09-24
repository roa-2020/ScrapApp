import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: -41.294105529785156,
    longitude: 174.7752685546875,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  return (
  <div>
  <ReactMapGL 
    {...viewport}
    mapboxApiAccessToken={'pk.eyJ1Ijoic2NyYXBwIiwiYSI6ImNrZmY3Y2ltMzBhbWoydm9rdGk2bGw3bWEifQ.wKdEATteeGosG3h7PuAKMw'}
    >
    markers here
  </ReactMapGL>
  </div>
  )
}

