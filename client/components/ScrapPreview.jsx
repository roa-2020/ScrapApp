import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUtensils, } from '@fortawesome/free-solid-svg-icons'
class ScrapPreview extends React.Component {

  render() {
    return (
      <>
        <h1 className="preview-title">Current Scraps In Your Area!</h1>
        <div className="preview-cols">
          {
            this.props.scraps.slice(0, 3).map(scrap => {
              return (
                <div className="card" key={scrap.id}>
                  {/* <div className="card-content"> */}
                  {/* <div className="media"> */}
                      <div className="media-left">
                        <figure className="image is-24x24">
                      {/* <img src="https://bulma.io/images/placeholders/48x48.png" alt="Placeholder image" /> */}
                      <FontAwesomeIcon icon={faUtensils} size="2x" className="nav-icon" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6">{scrap.scrap_name}</p>
                    {/* <p className="subtitle is-7">{scrap.category}</p> */}
                    <p className="subtitle is-7">{scrap.description}</p>
                      </div>
                  {/* </div> */}
                  {/* </div> */}
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