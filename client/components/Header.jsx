import React from "react"
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

// import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        const { auth } = this.props
        return (
            <>
                <header className="navbar is-fixed-top">
                    <Link to={`/user/${auth.user.id}`}><FontAwesomeIcon icon={faUserCircle} size="2x" className="nav-icon" /></Link>
                    <h1 className="title mb-0">Scrap</h1>
                    {/* <GeolocateControl
                        positionOptions={this.props.positionOptions}
                        trackUserLocation={this.props.trackUserLocation}
                        //on page load centre on user
                        auto={this.props.auto}
                    /> */}
                    <Link to='/scraps/add'><FontAwesomeIcon icon={faPlusCircle} size="2x" className="nav-icon" /></Link>

                </header>
            </>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header)

//jsx 