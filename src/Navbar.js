import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import face from "./images/face.png";
// import smile from "./images/smile.png";

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
    rY: 0,
    face: "",
    faceClass: "facePic"
  };

  smile = () => {
    if (this.state.hover) {
      return "./images/smile.jpg";
    } else {
      return `${this.props.facePic}`;
    }
  };

  componentDidMount() {
    let face = new Image();
    face.src = require("./images/face.png");
    let smile = new Image();
    smile.src = require("./images/smile.png");
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
    // console.log(pos.top);
    // console.log(pos.width);
    // console.log(pos.height);
    // console.log(
    //   `middle x=${pos.left + pos.width * 0.5} y=${Math.abs(pos.top)}`
    // );
    this.setState({
      middleX: pos.left + pos.width * 0.5,
      middleY: Math.abs(pos.top),
      width: window.innerWidth,
      height: window.innerHeight
    });
    // console.log(this.state.width);
  };

  facePos = () => {
    if (this.state.hover === false) {
      this.setState({
        rX:
          (this.props.x - this.state.middleX) /
          (this.state.middleX - this.state.width),
        rY: (this.props.y - this.state.middleY) / this.state.height
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.x !== this.props.x || nextProps.y !== this.props.y) {
      //Perform some operation
      this.facePos();
    }
  }

  displayFace = () => {
    if (this.state.class === "navbarIn") {
      return;
    }
  };

  animateFace = () => {
    console.log("please stop clicking me");
    this.setState({ faceClass: "facePic animate" });
    setTimeout(() => {
      this.setState({ faceClass: "facePic" });
    }, 1000);
  };

  // faceSmile = () => {
  //   return this.props.facePic == "./images/face.png" ? face : smile;
  // };

  // faceSmile2 = () => {
  //   return face;
  // };

  render() {
    let rotate = `rotate3d(${this.state.rY}, ${this.state.rX}, 0, 50deg)`;

    let style = {
      transform: rotate,
      WebkitTransform: rotate
    };
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
        <div className="faceDiv">
          <img
            rel="preload"
            // onMouseEnter={event => {
            //   this.setState({ rX: 0, rY: 0, hover: true });
            // }}
            // onMouseLeave={event => {
            //   this.setState({ hover: false });
            // }}
            onClick={() => {
              this.animateFace();
            }}
            style={style}
            src={require(`${this.props.facePic}`)}
            // src={this.faceSmile()}
            alt=""
            className={this.state.faceClass}
            id="facePic"
          />{" "}
        </div>
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
