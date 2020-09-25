import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Nav from "./Nav"

class Profile extends React.Component {
    state = {
        details: "",
    }
    componentDidMount() {

    }
    render() {
        apiGetUser(this.props.auth.user.id).then(data =>
            this.setState({ ...this.state, details: data }))

        return (
            <div className='profile'>
               
                 <div className='nav-container'>
                     <Nav />
                  </div>

                  <div className='topProfile'>

                    <FontAwesomeIcon icon={faUserCircle} size="2x" className="is-mobile" />
                    <div className=''><h1 class="title">{this.state.details && this.state.details.username}</h1></div> 
                  
                  </div>
           
                <div className='profileInfo'>
                    
                    <div className='profile-container'><h1 class="title">{this.state.details && this.state.details.username}</h1></div> 
                    <div className='profile-container'><h1 class="title">{this.state.details && this.state.details.name}</h1></div> 
                    <div className='profile-container'><h1 class="title">********</h1></div> 
                
                </div>

                        
                
            </div>

            
        )

    }

}
const mapStateToProps = ({ auth }) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Profile)