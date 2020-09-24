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
                <form action="" className="form">
                    <div className="field">
                        <label className="label">Location</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Location" />
                        </div>
                    </div>
                    <input className="button is-large is-fullwidth is-success" value='Add' type="submit" />
                </form>
            </>
        )
    }
}

export default connect()(AddScrapForm)