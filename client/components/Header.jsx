import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <>
                <FontAwesomeIcon icon={faUserCircle} />
            </>
        )
    }
}

export default Header