import React from "react"
import { connect } from "react-redux";
// import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        const { auth } = this.props
        return (
            <>
                <nav className="navbar is-fixed-bottom nav-footer" role="navigation">
                    <a href="/"><FontAwesomeIcon icon={faChair} size="2x" className="is-mobile" /></a>
                    <a href="/"><FontAwesomeIcon icon={faDrumstickBite} size="2x" className="is-mobile" /></a>
                    <a href="/"><FontAwesomeIcon icon={faLeaf} size="2x" className="is-mobile" /></a>
                    {/* <GeolocateControl
                        positionOptions={this.props.positionOptions}
                        trackUserLocation={this.props.trackUserLocation}
                        //on page load centre on user
                        auto={this.props.auto}
                    /> */}
                </nav>
            </>
        )
    }
}


const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Footer)