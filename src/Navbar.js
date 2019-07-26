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

  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setState({ class: "navbarIn" });
    } else {
      this.setState({ class: "navbarOut" });
    }
  }

  render() {
    return (
      <nav className={this.state.class}>
        {/* {console.log(window.location.pathname)} */}
        {/* <img src={require(`${this.smile()}`)} alt="" className="facePic" />{" "} */}
        <img src={require(`./images/face.jpg`)} alt="" className="facePic" />{" "}
        <ul className="navLinks">
          <li>
            {" "}
            <Link
              to="/"
              className="link"
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
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              className="link"
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
          </li>
          <li>
            {" "}
            <Link
              to="/projects"
              className="link"
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
          </li>
          <li>
            <Link
              to="/resume"
              className="link"
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
          </li>
          <li>
            {" "}
            <Link
              to="/contact"
              className="link"
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
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
