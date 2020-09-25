import React from "react"
import { connect } from 'react-redux'

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
                {/* <Nav /> */}
                {/* show users profile information here along with nav to logout  */
                 
            //    <p>hi</p>
            <div className = 'profileInfo'>
                <ul>
                    <li>{this.state.details && this.state.details.username}</li>
                    <li>{this.state.details && this.state.details.name}</li>
                    <li>********</li>
                </ul>
            </div>

                        
                }
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