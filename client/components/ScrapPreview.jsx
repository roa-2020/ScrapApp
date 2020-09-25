import React from 'react'
import { connect } from 'react-redux'

class ScrapPreview extends React.Component {

  render() {
    return (
      <>
        <h1>Preview of scraps</h1>
        <ul>
          {
            this.props.scraps.slice(0, 3).map(scrap => {
              return (
                <>
                  <li key={scrap.id} >{scrap.category}: {scrap.scrap_name}</li>
                </>
              )
            })
          }
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