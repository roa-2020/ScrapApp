import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <FontAwesomeIcon icon={faUserCircle} size="4x" className="navbar-brand" />
                    <h1 className="title level-item">Scrap</h1>
                    <FontAwesomeIcon icon={faPlusCircle} size="4x" className="level-item" />
                </nav>
            </>
        )
    }
}

export default Header