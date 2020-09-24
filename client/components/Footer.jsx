import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faChair } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="columns is-centered">
                    <FontAwesomeIcon icon={faChair} size="4x" className="level-item" />
                    <FontAwesomeIcon icon={faDrumstickBite} size="4x" className="level-item" />
                    <FontAwesomeIcon icon={faLeaf} size="4x" className="level-item" />
                </footer>
            </>
        )
    }
}

export default Footer