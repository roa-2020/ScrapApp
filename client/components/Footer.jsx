import React from "react"
import { connect } from "react-redux";
// import ReactMapGL, { Marker, Popup, GeolocateControl } from "react-map-gl";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import { applyFilter } from "../actions/filter"

class Footer extends React.Component {
    componentDidMount() {
        //get categories
        //filter all scraps recieved from db by category
    }

    render() {
        const { auth } = this.props
        return (
            <>
                <nav className="navbar is-fixed-bottom nav-footer" role="navigation">
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Household"))} icon={faChair} size="2x" className="is-mobile" />
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Food"))} icon={faDrumstickBite} size="2x" className="is-mobile" />
                    <FontAwesomeIcon onClick={() => this.props.dispatch(applyFilter("Other"))} icon={faLeaf} size="2x" className="is-mobile" />
                </nav>
            </>
        )
    }
}

const mapStateToProps = ({ filter }) => {
    return { filter }
}

export default connect(mapStateToProps)(Footer)