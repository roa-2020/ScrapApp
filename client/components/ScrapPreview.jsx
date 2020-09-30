import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDrumstickBite, faCouch, faTshirt, faArchive} from '@fortawesome/free-solid-svg-icons'

class ScrapPreview extends React.Component {

  getScrapIcon = (category) => {
    switch (category) {
      case 'Food':
        return faDrumstickBite;
      case 'Furniture':
        return faCouch
      case 'Clothes':
        return faTshirt;
      case 'Stuff':
      default:
        return faArchive
    }
  }

  render() {
    return (
      <>
        <h1 className="preview-title">Current Scraps In Your Area!</h1>
        <div className="preview-cols">
          {
            this.props.scraps.slice(0, 3).map(scrap => {
              return (
                <div className="card" key={scrap.id}>
                      <div className="media-left">
                        <figure className="image is-24x24">
                          <FontAwesomeIcon icon={this.getScrapIcon(scrap.category)} size="2x" className={`nav-icon ${scrap.category}`}/>
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6">{scrap.scrap_name}</p>
                        <p className="subtitle is-7">{scrap.description}</p>
                      </div>
                </div>
              )
            })
          }
        </div>
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