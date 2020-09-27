import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth'

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {username, password} = this.state
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }
  render() {
    const {auth} = this.props
    return (
      <form className="form-box" onSubmit={this.handleSubmit}>
        <h1 className="title is-2">Scrap</h1>
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="label is-large has-text-centered">Username
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" value={this.state.username} onChange={this.handleChange}/>
        </label>
        <label className="label is-large has-text-centered">Password
          <input required className="input has-text-centered is-large is-fullwidth" placeholder="Password" type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange}/>
        </label>
        <input className="button is-large" value='Login' type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
