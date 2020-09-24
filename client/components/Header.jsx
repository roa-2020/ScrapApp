import React from "react"
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="header">
                    <a href="/"><FontAwesomeIcon icon={faUserCircle} size="2x" className="is-mobile" /></a>
                    <h1 className="title mb-0">scrap</h1>
                    <a href="/"><FontAwesomeIcon icon={faPlusCircle} size="2x" className="is-mobile" /></a>
                </header>
            </>
        )
    }
}

export default Header