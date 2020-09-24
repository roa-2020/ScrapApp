import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="header">
                    <FontAwesomeIcon icon={faUserCircle} size="3x" className="" />
                    <h1 className="title mb-0">Scrap</h1>
                    <FontAwesomeIcon icon={faPlusCircle} size="3x" className="" />
                </header>
            </>
        )
    }
}

export default Header