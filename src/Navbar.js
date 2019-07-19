import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = { class: "navbarIn", hover: false };

  whatever = () => {};

  smile = () => {
    if (this.state.hover) {
      return "./images/smile.jpg";
    } else {
      return `${this.props.facePic}`;
    }
  };

  render() {
    return (
      <div className={this.state.class}>
        <img src={require(`${this.smile()}`)} alt="" className="facePic" />{" "}
        <br />
        <div className="link">
          <Link
            to="/"
            onClick={event => {
              this.setState({ class: "navbarIn" });
            }}
            onMouseEnter={event => {
              this.setState({ hover: true });
            }}
            onMouseLeave={event => {
              this.setState({ hover: false });
            }}
          >
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="/about"
            onClick={event => {
              this.setState({ class: "navbarOut" });
            }}
            onMouseEnter={event => {
              this.setState({ hover: true });
            }}
            onMouseLeave={event => {
              this.setState({ hover: false });
            }}
          >
            About
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="/projects"
            onClick={event => {
              this.setState({ class: "navbarOut" });
            }}
            onMouseEnter={event => {
              this.setState({ hover: true });
            }}
            onMouseLeave={event => {
              this.setState({ hover: false });
            }}
          >
            Projects
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="/resume"
            onClick={event => {
              this.setState({ class: "navbarOut" });
            }}
            onMouseEnter={event => {
              this.setState({ hover: true });
            }}
            onMouseLeave={event => {
              this.setState({ hover: false });
            }}
          >
            Resume
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link
            to="/contact"
            onClick={event => {
              this.setState({ class: "navbarOut" });
            }}
            onMouseEnter={event => {
              this.setState({ hover: true });
            }}
            onMouseLeave={event => {
              this.setState({ hover: false });
            }}
          >
            {" "}
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
