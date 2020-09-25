import React from "react"
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import Nav from "./Nav"
import { apiGetUser } from "../apis/users.js";



class Profile extends React.Component {
    state = {
        details: "",
    }
    componentDidMount() {
        
    }
    render() {
        apiGetUser(this.props.auth.user.id).then(data =>
            this.setState({...this.state, details: data}))
    
        return (
            <>
               
                 <div className='nav-container'>
                     <Nav />
                  </div>
           
            <div className = 'profileInfo'>
                
                   <div className='container'><h1 class="title">{this.state.details && this.state.details.username}</h1></div> 
                   <div className='container'><h1 class="title">{this.state.details && this.state.details.name}</h1></div> 
                   <div className='container'><h1 class="title">********</h1></div> 
               
            </div>

                        
                
            </>
        )
      
    }
   
}
const mapStateToProps = ({ auth }) => {
    return {
      auth
    }
  }

  export default connect(mapStateToProps)(Profile)