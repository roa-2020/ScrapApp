import React from "react"
import { connect } from "react-redux";
import FormGeocode from './FormGeocode'
import { apiAddScraps, apiGetScraps } from "../apis/scrap.js";
import { getAllScraps, initScrap } from "../actions/scraps"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faDrumstickBite, faCouch, faTshirt, faArchive} from '@fortawesome/free-solid-svg-icons'


class AddScrapForm extends React.Component {
    state = {
        category: '',
        address: '',
        scrap_name: '',
        description: '',
        geoInputLoaded: true
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
        scrap.address = this.props.address
        apiAddScraps(scrap)
            .then(scrap => {
                apiGetScraps()
                .then(scraps => {
                this.props.dispatch(getAllScraps(scraps));
                })
                // this.props.history.push('/')
        })
        this.setState({
            category: '',
            address: '',
            scrap_name: '',
            description: '',
            geoInputLoaded: false
        }, () => {
            this.setState({
                geoInputLoaded: true
            })
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
                                <input type="radio" name="category" onChange={this.handleChange} value="Food" id="food" checked={this.state.category === "Food"} />
                                <label htmlFor="food">
                                    <FontAwesomeIcon icon={faDrumstickBite} size="2x" className="nav-icon food-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="Furniture" id="furniture" checked={this.state.category === "Furniture"} />
                                <label htmlFor="furniture">
                                    <FontAwesomeIcon icon={faCouch} size="2x" className="nav-icon furniture-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="Clothes" id="clothes" checked={this.state.category === "Clothes"} />
                                <label htmlFor="clothes">
                                    <FontAwesomeIcon icon={faTshirt} size="2x" className="nav-icon clothes-icon" />
                                </label>
                                <input type="radio" name="category" onChange={this.handleChange} value="Stuff" id="stuff" checked={this.state.category === "Stuff"} />
                                <label htmlFor="stuff">
                                    <FontAwesomeIcon icon={faArchive} size="2x" className="nav-icon stuff-icon" />
                                </label>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Location</label>
                            <div className="control">
                                {this.state.geoInputLoaded && <FormGeocode />}
                                {/* <input required className="input" type="text" placeholder="Location" value={this.state.address} name="address" onChange={this.handleChange} /> */}
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
                        <input className="button is-medium" value='Add' type="submit" onClick={this.props.closeMenu}/>
                        <button type="button" onClick={this.props.closeMenu} className='logoutButton button is-medium'>Close</button>
                </form>
                

                </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { latitude: globalState.newScrap.lat, longitude: globalState.newScrap.long, address: globalState.newScrap.address }
}

export default connect(mapStateToProps)(AddScrapForm);