import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Map from './Map'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import { checkAuth } from '../actions/auth'
import Header from './Header'
import Footer from './Footer'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render() {
    const { auth } = this.props
    return (
      <>
        <Router>
          <div className="hero-body has-text-centered">
            <Link to='/' className="">
              <h1 className="title is-1">ScrapApp</h1>
            </Link>
            <Route path="/" component={Nav} />
          </div>

          {!auth.isAuthenticated
            ?
            <div className="container has-text-centered">
              <div className="hero is-small is-primary">
              </div>
              <div className=''>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </div>
            </div>
            :
            <>
              <main className="map_box_container">
                <Map />
              </main>
              <Header />
              <Footer />
            </>
          }
        </Router>
      </>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
