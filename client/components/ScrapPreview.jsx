import React from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'

import { initScrap } from '../actions/scraps'
import { apiGetScraps } from '../apis/scrap'

export class ScrapPreview extends React.Component {
  componentDidMount() {
    apiGetScraps().then(scraps => console.log(scraps))
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