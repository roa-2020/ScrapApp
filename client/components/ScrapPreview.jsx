import React from 'react'
import { connect } from 'react-redux'

import { getAllScraps } from '../actions/scraps'
import { apiGetScraps } from '../apis/scrap'

let scrapsArray = this.props.scraps

class ScrapPreview extends React.Component {
  componentDidMount() {
    apiGetScraps().then(scraps => this.props.dispatch(getAllScraps(scraps)))
  }

  render() {
    const shuffled = scrapsArray.sort(() => Math.random() - Math.random()).slice(0, n)
    console.log(scrapsArray)
    console.log(shuffled)
    return (
      <>
        <ul>
          {/* {
            this.props.scraps.map((scrap, idx) => {
              return <li>{scrap.category}: {scrap.scrap_name}</li>
            })
          } */}
        </ul>
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