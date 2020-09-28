import React from "react";
import Profile from "./Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    console.log("open");
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.toggleMenu} className="toggle-menu">
          click me
        </button>

        <div
          className={[
            "side-bar",
            this.state.menuOpen ? "side-bar-open" : "side-bar-closed",
          ].join(" ")}
        >
          <Profile />
        </div>
      </React.Fragment>
    );
  }
}
