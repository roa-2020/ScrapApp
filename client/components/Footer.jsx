import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar is-fixed-bottom" role="navigation">
                    <FontAwesomeIcon icon={faChair} size="3x" className="" />
                    <FontAwesomeIcon icon={faDrumstickBite} size="3x" className="" />
                    <FontAwesomeIcon icon={faLeaf} size="3x" className="" />
                </nav>
            </>
        )
    }
}

export default Footer