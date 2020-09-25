import React from 'react'
import { connect } from 'react-redux'

import { getAllScraps } from '../actions/scraps'
import { apiGetScraps } from '../apis/scrap'

class ScrapPreview extends React.Component {
  componentDidMount() {
    //1) Use api call to get all scraps (array of objects)
    //2) dispatch action getAllScraps to store into global state
    apiGetScraps().then(scraps => this.props.dispatch(getAllScraps(scraps)))
    console.log(this.props)
  }

  render() {
    return (
      <>

      </>
    )
  }
}

const mapStateToProps = ({ scraps }) => {
  return {
    scraps
  }
}

export default connect(mapStateToProps)(ScrapPreview)