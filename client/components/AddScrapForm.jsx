import React from "react"
import { connect } from "react-redux";
import FormGeocode from './FormGeocode'
import { apiAddScraps, apiGetScraps } from "../apis/scrap.js";
import { getAllScraps, initScrap } from "../actions/scraps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faDrumstickBite, faCouch, faTshirt, faDumpsterFire, faShoePrints, faBowlingBall } from '@fortawesome/free-solid-svg-icons'


class AddScrapForm extends React.Component {
    state = {
        category: '',
        address: '',
        scrap_name: '',
        description: '',
    }

    componentDidMount() {
    }

    handleChange = (e) => {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const scrap = this.state
        scrap.longitude=this.props.longitude
        scrap.latitude=this.props.latitude
        apiAddScraps(scrap)
            .then(scrap => {
                apiGetScraps()
                .then(scraps => {
                this.props.dispatch(getAllScraps(scraps));
                })
                this.props.history.push('/')
        })
    }
    render() {
        return (
            <>
                <div className="form-container">
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                        <h1 className="title">Add A Scrap</h1>
                        <div className="field">
                            <label className="label">Category</label>
                            <div className="control radio-group">
                                <input type="radio" name="category" onChange={this.handleChange} value="faDrumstickBite" id="food" />
                                <label htmlFor="food">
                                    <FontAwesomeIcon icon={faDrumstickBite} size="2x" className="nav-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="furniture" id="furniture" />
                                <label htmlFor="furniture">
                                    <FontAwesomeIcon icon={faCouch} size="2x" className="nav-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="clothes" id="clothes" />
                                <label htmlFor="clothes">
                                    <FontAwesomeIcon icon={faTshirt} size="2x" className="nav-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="stuff" id="stuff" />
                                <label htmlFor="stuff">
                                    <FontAwesomeIcon icon={faDumpsterFire} size="2x" className="nav-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="shoes" id="shoes" />
                                <label htmlFor="shoes">
                                    <FontAwesomeIcon icon={faShoePrints} size="2x" className="nav-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="balls" id="balls" />
                                <label htmlFor="balls">
                                    <FontAwesomeIcon icon={faBowlingBall} size="2x" className="nav-icon" />
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Location</label>
                                <FormGeocode/>
                            <div className="control">
                                <input required className="input" type="text" placeholder="Location" value={this.state.address} name="address" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Scrap Name</label>
                            <div className="control">
                                <input required className="input" type="text" placeholder="Name" value={this.state.scrap_name} name="scrap_name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea required className="textarea" placeholder="Add a description.." value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <input className="button is-medium" value='Add' type="submit" />
                </form>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { latitude: globalState.newScrap.lat, longitude: globalState.newScrap.long }
}

export default connect(mapStateToProps)(AddScrapForm);