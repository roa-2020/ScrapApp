import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

class Nav extends React.Component {
  state = {
  }

  render() {
    const { auth, logout } = this.props
    return <nav className="navbar">
      <div className="navbar-brand">
        <>
          <Link to='/' className="navbar-item column">Map</Link>
          <Link to='/' className="navbar-item column" onClick={() => logout()}>Logout</Link>
        </>
      </div>
    </nav >
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
