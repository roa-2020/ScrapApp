import React from "react";
import { connect } from "react-redux";

import { apiAddScraps, apiGetScraps } from "../apis/scrap.js";
import { initScrap } from "../actions/scraps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

class AddScrapForm extends React.Component {
  state = {
    category: "",
    address: "",
    scrap_name: "",
    description: "",
  };

  componentDidMount() {}
  /*create the geocoder function
it takes two arguments, the request object and the callback function
the request object is simply the imputted address string we want to geocode.
the callback is the handleResults.
*/
  geocodeAddress = (address) => {
    this.geocoder.geocode(
      { address: address },
      function handleResults(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);

          return;
        }

        this.map.setCenter({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude,
        });

        this.marker.setPosition({
          lat: ATLANTIC_OCEAN.latitude,
          lng: ATLANTIC_OCEAN.longitude,
        });
      }.bind(this)
    );
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const scrap = this.state;
    //create a placeholder for the address the user types
    // const address = this.searchInputElement.value;
    // this.geocodeAddress(address);

    apiAddScraps(scrap).then((scrap) => {
      this.props.dispatch(initScrap(scrap));
      this.props.history.push("/");
    });
  };
  //this is the function called by the ref attribute. lets get the value from the handleform submit above
//   setSearchInputElementReference = (inputReference) => {
//     this.searchInputElement = inputReference;
  };

  render() {
    return (
      <>
        <div className="form-container">
          <form action="" className="form" onSubmit={this.handleSubmit}>
            <h1>Add A Scrap</h1>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="food"
                  id="food"
                />
                <label htmlFor="food">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="furniture"
                  id="furniture"
                />
                <label htmlFor="furniture">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="clothes"
                  id="clothes"
                />
                <label htmlFor="clothes">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="stuff"
                  id="stuff"
                />
                <label htmlFor="stuff">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="shoes"
                  id="shoes"
                />
                <label htmlFor="shoes">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
                <input
                  type="radio"
                  name="category"
                  onChange={this.handleChange}
                  value="balls"
                  id="balls"
                />
                <label htmlFor="balls">
                  <FontAwesomeIcon
                    icon={faImage}
                    size="2x"
                    className="nav-icon"
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                {/* create a reference on the ref attribute and assign a new function to it */}
                <input
                  className="input"
                  type="text"
                  placeholder="Location"
                  value={this.state.address}
                  name="address"
                  onChange={this.handleChange}
                  ref={this.setSearchInputElementReference}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Scrap Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={this.state.scrap_name}
                  name="scrap_name"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Add a description.."
                  value={this.state.description}
                  name="description"
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <input
              className="button is-large is-fullwidth is-success"
              value="Add"
              type="submit"
            />
            <input type="hidden" value={this.props.latitude} name="latitude" />
            <input
              type="hidden"
              value={this.props.longitude}
              name="longitude"
            />
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(globalState) {
  return { scraps: globalState.scraps };
}

export default connect(mapStateToProps)(AddScrapForm);
