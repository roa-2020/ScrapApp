import React from "react";

export default class Sidebar extends React.Component {
  
    toggleMenu = () => {
        console.log("open")
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  state = {
    menuOpen: false,
  };

  render() {

    return (
      <React.Fragment>
           <button
            onClick={this.toggleMenu}
            className="toggle-menu"
            style={
              {
                zIndex: "234567891",
                position:"fixed",
                marginTop: "20px"
                // transform: `translate(${width}px, 20vh)`,
              }
            }
          > click me </button>
        { this.state.menuOpen && <div
          className="side-bar"
          style={{
            //   transform: `translatex(${xPosition}px)`,
            marginTop: "35px",
            width: "400px",
            minHeight: "1080px",
            backgroundColor: "grey",
            position:"fixed",
            zIndex: "234567890"
          }}
        >
          <div className="content">{this.props.children}</div>
        </div>}
      </React.Fragment>
    );
  }
}
