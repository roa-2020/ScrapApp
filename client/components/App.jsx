import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { apiGetScraps, apiAddScraps, apiUpdateScraps, apiDeleteScraps } from '../apis/scrap'

import Map from './Map'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import { checkAuth } from '../actions/auth'
import Header from './Header'
import Footer from './Footer'
import AddScrapForm from './AddScrapForm'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render() {
    const { auth } = this.props
    return (
        <Router>
        <div className="nav-container">
            <Route path="/" component={Nav} />
        </div>

          {!auth.isAuthenticated
          ?
              <div className=''>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
          </div>
            :
            <>
            <Route exact path="/" component={Header} />
            <main className="map_box_container">
              <Route exact path="/" component={Map} />
            </main>
            <Route exact path="/" component={Footer} />
            <Route exact path="/scraps/add" component={AddScrapForm} />
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
