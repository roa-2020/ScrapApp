import React from "react"
import { connect } from "react-redux";


import { apiAddScraps } from "../apis/scrap.js";


class AddScrapForm extends React.Component {
    state = {
        details: "",
    }
    componentDidMount() {
    }
    render() {
        return (
            <>
                {/* show form to add new scrap item */}
                <div className="field">
                    <label className="label">Location</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Location" />
                    </div>
                </div>

            </>
        )
    }
}

export default connect()(AddScrapForm)