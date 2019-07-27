import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  state = {
    class: "navbarIn",
    hover: false,
    x: 0,
    y: 0,
    middleX: 0,
    middleY: 0,
    height: 0,
    width: 0,
    rX: 0,
    rY: 0
  };

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
    this.screenPos();
  }

  componentWillUnmount() {}

  // mouseTrack(e) {
  //   this.setState({ x: e.pageX, y: e.pageY });
  //   this.facePos();
  // }

  screenPos = () => {
    const pic = document.getElementById("facePic");
    let pos = pic.getBoundingClientRect();
    // console.log(pos.left);
    console.log(pos.top);
    // console.log(pos.width);
    console.log(pos.height);
    // console.log(
    //   `middle x=${pos.left + pos.width * 0.5} y=${Math.abs(pos.top)}`
    // );
    this.setState({
      middleX: pos.left + pos.width * 0.5,
      middleY: Math.abs(pos.top),
      width: window.innerWidth,
      height: window.innerHeight
    });
    console.log(this.state.width);
  };

  facePos = () => {
    if (this.state.hover == false) {
      this.setState({
        rX:
          (this.props.x - this.state.middleX) /
          (this.state.middleX - this.state.width),
        rY: (this.props.y - this.state.middleY) / this.state.height
      });
    }
    else 
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.x !== this.props.x || nextProps.y !== this.props.y) {
      //Perform some operation
      this.facePos();
    }
  }

  render() {
    let rotate = `rotate3d(${this.state.rY}, ${this.state.rX}, 0, 40deg)`;
    let style = { transform: rotate };
    return (
      <nav
        className={this.state.class}
        // onMouseMove={event => {
        //   this.mouseTrack(event);
        // }}
      >
        {/* {console.log(`x: ${this.state.x} y: ${this.state.x}`)}{" "} */}
        {/* {console.log(window.location.pathname)} */}
        {/* <img src={require(`${this.smile()}`)} alt="" className="facePic" />{" "} */}
        <img
          onMouseEnter={event => {
            this.setState({ rX: 0, rY: 0, hover: true });
          }}
          onMouseLeave={event => {
            this.setState({ hover: false });
          }}
          style={style}
          src={require(`./images/face.jpg`)}
          alt=""
          className="facePic"
          id="facePic"
        />{" "}
        {/* {console.log(`x: ${this.state.x} y: ${this.state.x}`)} */}
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
        <div className="navBorder" />
      </nav>
    );
  }
}

export default Navbar;
