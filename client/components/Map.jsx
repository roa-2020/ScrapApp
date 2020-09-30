import React, { createRef, } from "react";
import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";
import { connect } from "react-redux";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { apiDeleteScraps } from "../apis/scrap.js";
import { deleteScrap } from "../actions/scraps";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faCouch, faTshirt, faArchive} from '@fortawesome/free-solid-svg-icons'

class Map extends React.Component {
  IDEAL_ZOOM = 15;
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
      zoom: this.IDEAL_ZOOM
    },
  };

  viewportChange = (viewport) => {
    this.setState({ viewport });
  };

  changeScrap = (scrap) => {
    this.setState({ selectedScrap: scrap });
  };

  deleteScrap = (id) => {
    this.props.dispatch(deleteScrap(id));
    const selectedScrap = this.state.selectedScrap
    this.changeScrap(null);
    apiDeleteScraps(id)
      .catch(() => {
        this.changeScrap(selectedScrap)
      })
  }

  getScrapIcon = (category) => {
    switch (category) {
      case 'Food':
        return faDrumstickBite;
      case 'Furniture':
        return faCouch
      case 'Clothes':
        return faTshirt;
      case 'Stuff':
      default:
        return faArchive
    }
  }

  _onViewportChange = (viewport) => {
    viewport.zoom = this.IDEAL_ZOOM
    this.setState({ viewport })
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

          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            auto={true}
            onViewportChange={this._onViewportChange}
          />
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
                  <FontAwesomeIcon icon={this.getScrapIcon(scrap.category)} size="2x" className={`nav-icon ${scrap.category}`}/>
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
                  {selectedScrap.scrap_name}<span>
                    <FontAwesomeIcon icon={this.getScrapIcon(selectedScrap.category)} size="1x" className="nav-icon" />
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
  return { scraps: globalState.scraps, filter: globalState.filter };
}

export default connect(mapStateToProps)(Map);
