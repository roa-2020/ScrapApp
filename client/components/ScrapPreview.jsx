import React from 'react'
import { connect } from 'react-redux'

class ScrapPreview extends React.Component {

  // componentDidMount() {
  //   // scrapsArr.sort(() => 0.5 - Math.random()).slice(0, 2)
  //   let scrapsArr = []
  //   if (this.props.scraps.length > 0) {
  //     scrapsArr = [...this.props.scraps]
  //     scrapsArr.slice(0, 2)
  //     console.log(1, scrapsArr)
  //   }
  // }

  render() {
    return (
      <>
        <h1>Preview of scraps</h1>
        <ul>
          {
            this.props.scraps.map(scrap => {
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