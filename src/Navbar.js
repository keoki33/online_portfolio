import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {};

  facePic = () => {
    if (this.props.x > 2430) {
      return require(`./images/230.png`);
    } else if (this.props.x < 2100) {
      return require(`./images/130.png`);
    } else {
      return require(`./images/180.png`);
    }
  };

  whatever = () => {};

  render() {
    return (
      <div className={this.props.navbarClass}>
        <img src={this.facePic()} alt="" width="90" height="90" /> <br />
        <Link to="/" className="link">
          Home
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/about" className="link">
          About
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/projects" className="link">
          Projects
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/resume" className="link">
          Resume
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    );
  }
}

export default Navbar;
