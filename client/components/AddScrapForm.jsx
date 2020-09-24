import React from "react"
import { connect } from "react-redux";

import { apiAddScraps } from "../apis/scrap.js";


class AddScrapForm extends React.Component {
    state = {
        scrapLocation: '',
        scrapName: '',
        scrapDescription: '',
    }

    componentDidMount() {
        apiAddScraps()
            .then(scrap => {
                this.setState({
                    scrap: scrap
                })
            })
    }

    handleChange = (e) => {
        this.setState({
            scrapLocation: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({

        })
    }

    render() {
        return (
            <>
                {/* show form to add new scrap item */}
                <div className="form-container">
                    <form action="" className="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                                <input className="input" type="text" placeholder="Location" value={this.state.scrapLocation} name={this.state.scrapLocation} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Scrap Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name" value={this.state.scrapName} name={this.state.scrapName} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Add a description.." value={this.state.scrapDescription} name={this.state.scrapDescription} onChange={this.handleChange}></textarea>
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