import React from "react"
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { apiGetUser } from "../apis/users";
import { logoutUser } from '../actions/auth'

class Profile extends React.Component {
  state = {
    details: "",
  }

  componentDidMount() {
  }

  render() {
    apiGetUser(this.props.auth.user.id).then(data =>
      this.setState({ ...this.state, details: data }))
    const { logout } = this.props
    return (
      <>
        <div className='profile'>
          <div className='topProfile'>
            <FontAwesomeIcon icon={faUserCircle} size="4x" />
            <div className=''>
              <h1 className="title">{this.state.details && this.state.details.username}</h1>
            </div>
          </div>
          <div className='profileInfo'>
            <div className="field">
              <div className='profile-container'>
                <label className='label'>Username</label>
                <h1 className="title">{this.state.details && this.state.details.username}</h1>
              </div>
            </div>
            <div className="field">
              <div className='profile-container'>
                <label className='label'>Name</label>
                <h1 className="title">{this.state.details && this.state.details.name}</h1>
              </div>
            </div>
            <div className="field">
              <div className='profile-container'>
                <label className='label'>Password</label>
                <h1 className="title">********</h1>
              </div>
            </div>
            <button onClick={logout} className='button logoutButton is-medium' >Log out</button>
            <button onClick={this.props.closeMenu} className='button logoutButton is-medium' >Close</button>
          </div>
        </div>
      </>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)