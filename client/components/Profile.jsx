import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { apiGetUser } from "../apis/users";
import { addProfilePic } from "../apis/fileupload";
import { logoutUser } from '../actions/auth'


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.fileInput = React.createRef();
  }

  state = {
    details: "",
  }

  componentDidMount() {

  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.fileInput.current.files[0])
    addProfilePic(this.fileInput.current.files[0], this.props.auth.user.id)
      .then(console.log)
  }

  render() {
    // apiGetUser(this.props.auth.user.id).then(data =>
    //   this.setState({ ...this.state, details: data }))
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
            action={'/api/v1/user/' + this.props.auth.user.id}
            method='post'
            encType="multipart/form-data"
            onSubmit={this.handleSubmit}>
            <input type="file" name="sampleFile" ref={this.fileInput} />
            <input type='submit' value='Upload!' />
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