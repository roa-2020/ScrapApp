import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { apiGetScraps, apiAddScraps, apiUpdateScraps, apiDeleteScraps } from '../apis/scrap'

import Profile from './Profile'
import Map from './Map'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import { checkAuth } from '../actions/auth'
import Header from './Header'
import Footer from './Footer'
import ScrapPreview from './ScrapPreview'
import AddScrapForm from './AddScrapForm'

import { getAllScraps } from '../actions/scraps'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
    apiGetScraps()
      .then(scraps => {
        this.props.dispatch(getAllScraps(scraps));
      })
  }

  componentDidUpdate() {
    apiGetScraps()
      .then(scraps => {
        this.props.dispatch(getAllScraps(scraps));
      })
  }

  render() {

    const { auth } = this.props
    return (
      <Router>
        <div className="">
          {/* <Link to='/' className="">
              <h1 className="title is-1">ScrapApp</h1>
            </Link> */}

        </div>

        {!auth.isAuthenticated
          ?
          <div className="login-container">
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <ScrapPreview />

          </div>
          :
          <>
            <Route exact path="/" component={Header} />
            <main className="map_box_container">
              <Route exact path="/" component={Map} />
            </main>
            <Route exact path="/user" component={Nav} />
            <Route exact path="/" component={Footer} />
            <Route exact path="/scraps/add" component={Nav} />
            <Route exact path="/scraps/add" component={AddScrapForm} />
            <Route exact path="/user/:id" component={Profile} />
          </>
        }
      </Router>

    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
