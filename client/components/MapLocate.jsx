// import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

// import React, { useState, useRef, useCallback } from "react";
// import ReactMapGL from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";

// const mapboxApiAccessToken = process.env.REACT_APP_MAPBOX_TOKEN;

// const Example = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//   });
//   const mapRef = useRef();
//   const handleViewportChange = useCallback(
//     (newViewport) => setViewport(newViewport),
//     []
//   );

//   // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
//   const handleGeocoderViewportChange = useCallback((newViewport) => {
//     const geocoderDefaultOverrides = { transitionDuration: 1000 };

//     return handleViewportChange({
//       ...newViewport,
//       ...geocoderDefaultOverrides,
//     });
//   }, []);

//   return (
//     <div style={{ height: "100vh" }}>
//       <button
//         onClick={() => {
//           this.setState({ showGeocoder: !this.state.showGeocoder });
//         }}
//       >
//         LABLE
//       </button>
//       <ReactMapGL
//         ref={mapRef}
//         {...viewport}
//         width="100%"
//         height="100%"
//         onViewportChange={handleViewportChange}
//         mapboxApiAccessToken={mapboxApiAccessToken}
//       >
//         <Geocoder
//           mapRef={mapRef}
//           onViewportChange={handleGeocoderViewportChange}
//           mapboxApiAccessToken={mapboxApiAccessToken}
//           position="top-right"
//         />
//       </ReactMapGL>
//     </div>
//   );
// };

// export default Example;
