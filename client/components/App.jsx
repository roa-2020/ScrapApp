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
      <>
        <Router>
          <div className="">
            {/* <Link to='/' className="">
              <h1 className="title is-1">ScrapApp</h1>
            </Link> */}
            <Route path="/" component={Nav} />
          </div>

          {!auth.isAuthenticated
            ?
            <div className="">
              {/* <div className="hero is-small is-primary">
              </div> */}
              <div className=''>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
              </div>
            </div>
            :
            <>
              <Header />
              <main className="map_box_container">
                <Map />
              </main>
              <Footer />
              <Route path="/scraps/add" component={AddScrapForm} />
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
