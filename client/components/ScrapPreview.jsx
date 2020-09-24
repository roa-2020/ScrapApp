import React from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'

import { initScrap } from '../actions/scraps'

export class ScrapPreview extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <>
      
      </>
    )
  }
}

const mapStateToProps = ({ }) => {
  return {
  }
}

export default connect(mapStateToProps)(ScrapPreview)