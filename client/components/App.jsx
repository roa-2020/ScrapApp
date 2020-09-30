import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { apiGetScraps } from '../apis/scrap'
import { checkAuth } from '../actions/auth'
import { getAllScraps } from '../actions/scraps'
import Map from './Map'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import ScrapPreview from './ScrapPreview'

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
        if (this.props.filter === "") {
          this.props.dispatch(getAllScraps(scraps));
        } else {
          this.props.dispatch(getAllScraps(scraps.filter(scrap => scrap.category === this.props.filter)))
        }
      })
  }

  render() {

    const { auth } = this.props

    return (
      <Router>
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
            <main className="map_box_container">
              <Route exact path="/" component={Map} />
            </main>
              <Route exact path="/" component={Header} />
              <Route exact path="/" component={Footer} />
              <Route exact path="/scraps/add" component={Nav} />
          </>
        }
      </Router>

    )
  }
}

const mapStateToProps = ({ auth, filter }) => {

  return {
    auth,
    filter
  }
}

export default connect(mapStateToProps)(App)
