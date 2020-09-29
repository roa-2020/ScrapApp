import React from "react";
import Profile from  './Profile'


export default class SideNav extends React.Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <React.Fragment>
        {/* <button onClick={this.toggleMenu} className="toggle-menu">
          click me
        </button> */}

        {/* <div
          className={[
            "side-bar",
            this.state.menuOpen ? "side-bar-open" : "side-bar-closed",
          ].join(" ")}
        >
          <Profile />
          
        </div> */}
      </React.Fragment>
    );
  }
}
