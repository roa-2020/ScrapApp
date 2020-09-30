import React from 'react'
import { connect } from 'react-redux'
import { loginError, registerUserRequest } from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    name: '',
    password: '',
    confirm_password: ''
  }

  componentDidMount() {
    this.props.dispatch(loginError(''))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirm_password, name } = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({ username, password, name }, confirmSuccess))
  }

  render() {
    const { auth } = this.props

    return (
      <form className="form-box" onSubmit={this.handleSubmit}>
        <h1 className="title is-2">Register</h1>
        {auth.errorMessage && <span className="has-text-danger is-medium">{auth.errorMessage}</span>}
        <div className="columns name-container">
          <label className="column is-6 is-offset-one-quarter label is-medium has-text-centered">Username
          <input required className="input is-medium has-text-centered is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={this.handleChange} value={this.state.username} />
          </label>
          <label className="column is-6 label is-medium has-text-centered">First Name
            <input required className="input is-medium has-text-centered is-fullwidth" placeholder="First Name" type="text" name="name" onChange={this.handleChange} value={this.state.name} />
          </label>
        </div>
        <div className="columns password-container">
          <label className="column is-6 label is-medium has-text-centered">Password
            <input required className="input is-medium has-text-centered is-fullwidth" placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={this.handleChange} value={this.state.password} />
          </label>
          <label className="column is-6 label is-medium has-text-centered">Confirm Password
            <input required className="input is-medium has-text-centered is-fullwidth" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.handleChange} value={this.state.confirm_password} />
          </label>
        </div>
        <div className="button-container">
          <input className="button is-success is-medium" value="Register" type="submit" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
