import React from "react"
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="navbar is-fixed-top">
                    <Link to='/user'><FontAwesomeIcon icon={faUserCircle} size="2x" className="nav-icon" /></Link>
                    <h1 className="title mb-0">Scrap</h1>
                    <Link to='/scraps/add'><FontAwesomeIcon icon={faPlusCircle} size="2x" className="nav-icon" /></Link>
                </header>
            </>
        )
    }
}

export default Header

//jsx 