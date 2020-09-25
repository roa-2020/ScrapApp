import React from "react"
import { connect } from "react-redux";

import { apiAddScraps, apiGetScraps } from "../apis/scrap.js";
import { initScrap } from "../actions/scraps"

class AddScrapForm extends React.Component {
    state = {
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
        console.log(scrap)
        apiAddScraps(scrap)
            .then(scrap => {
                this.props.dispatch(initScrap(scrap))
                this.props.history.push('/')
        })
    }

    render() {
        return (
            <>
                {/* show form to add new scrap item */}
                <div className="form-container">
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                        <h1>Add A Scrap</h1>
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                                <input className="input" type="text" placeholder="Location" value={this.state.address} name="address" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Scrap Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name" value={this.state.scrap_name} name="scrap_name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Add a description.." value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    <input className="button is-large is-fullwidth is-success" value='Add' type="submit" />
                </form>
                </div>
            </>
        )
    }
}

export default connect()(AddScrapForm)