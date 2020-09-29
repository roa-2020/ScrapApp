import React from "react"
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Profile from  './Profile'

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
                    <div className="add-btn-grp">
                        <FontAwesomeIcon onClick={this.toggleMenu} icon={faUserCircle} size="2x" className="nav-icon" />
                        <h1 className="profile-title">profile</h1>
                    </div>
                    <h1 className="title mb-0">Scrap</h1>
                    <div className="add-btn-grp">
                        <h1 className="add">Add</h1>
                    <Link to='/scraps/add'><FontAwesomeIcon icon={faPlusCircle} size="2x" className="nav-icon" /></Link>
                    </div>
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