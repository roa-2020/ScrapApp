import React, {propTypes} from "react"

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
        return (
            <>
                <Nav />
                {/* show users profile information here along with nav to logout  */
                 
               
                 <userProfile 
                        username = 'thephil'
                        name = 'Phil'
                        password = '123'
                    /> 
                
                
                
                }
            </>
        )
      
    }
   
}
Profile.propTypes = {
}

export default Profile