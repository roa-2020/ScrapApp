import React from "react"
import { connect } from "react-redux";

import { apiAddScraps } from "../apis/scrap.js";


class AddScrapForm extends React.Component {
    state = {
        details: "",
    }
    componentDidMount() {
    }

    handleChange = (e) => {
        this.setState({
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
                                <input className="input" type="text" placeholder="Location" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Scrap Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Add a description.." onChange={this.handleChange}></textarea>
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