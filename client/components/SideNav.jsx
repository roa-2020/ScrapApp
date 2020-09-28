import React from "react";

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
          <form>
            <input placeholder="tings"></input>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
