import React from "react"
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Profile from  './Profile'

import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    state = {
        menuOpen: false,
    };

    toggleMenu = () => {
        this.setState({ menuOpen: !this.state.menuOpen });
    };
    render() {
        const { auth } = this.props
        return (
            <>
                <header className="navbar is-fixed-top navbar-main">
                    {/* <Link to={`/user/${auth.user.id}`}>
                        <FontAwesomeIcon icon={faUserCircle} size="2x" className="nav-icon" />
                        </Link> */}
                    <FontAwesomeIcon onClick={this.toggleMenu} icon={faUserCircle} size="2x" className="nav-icon" />
                    <h1 className="title mb-0">Scrap</h1>
                    {/* <GeolocateControl
                        positionOptions={this.props.positionOptions}
                        trackUserLocation={this.props.trackUserLocation}
                        //on page load centre on user
                        auto={this.props.auto}
                    /> */}
                    <Link to='/scraps/add'><FontAwesomeIcon icon={faPlusCircle} size="2x" className="nav-icon" /></Link>

                </header>
                <div
                    className={[
                        "side-bar",
                        this.state.menuOpen ? "side-bar-open" : "side-bar-closed",
                    ].join(" ")}
                >
                    <Profile closeMenu={this.toggleMenu} />

                </div>
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