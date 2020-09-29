import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { apiGetUser, addProfilePic } from "../apis/users";
import { logoutUser } from '../actions/auth'


class Profile extends React.Component {
  state = {
    details: "",
  }

  componentDidMount() {

  }

  handleSubmit = (file) => {
    addProfilePic(file, this.props.auth.user.id)
  }

  render() {
    apiGetUser(this.props.auth.user.id).then(data =>
      this.setState({ ...this.state, details: data }))
    const { auth, logout } = this.props
    let profilepic = <img src={`/profilepics/${auth.user.profilepic}.png`} className="nav-icon profile-img" style={{ width: "6em" }} />
    let defaultImg = <FontAwesomeIcon icon={faUserCircle} size="6x" className="nav-icon" style={{ margin: "0 auto" }} />
    return (
      <>
        <div className='profile'>
          <div className='topProfile'>
            {auth.user.profilepic ? profilepic : defaultImg}
            {/* <h1 className="title">{this.state.details && this.state.details.username}</h1> */}
          </div>


          <form ref='uploadForm'
            id='uploadForm'
            action='http://localhost:8000/upload'
            method='post'
            encType="multipart/form-data">
            <input type="file" name="sampleFile" />
            <input type='submit' value='Upload!' onClick={() => this.handleSubmit} />
          </form>


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
            <button onClick={logout} className='title button logoutButton is-medium' >Log out</button>
            <button onClick={this.props.closeMenu} className='title button logoutButton is-medium' >Close</button>

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