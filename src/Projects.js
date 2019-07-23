import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Projects extends Component {
  state = {
    class: "projects",
    recipePic: "./images/projects/r1.png",
    gamePic: "./images/projects/g1.png",
    mirrorPic: "./images/projects/m1.png"
  };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "projects" });
  }

  mirrorPic = () => {
    return this.state.mirrorPic;
  };

  whatever = () => {};

  render() {
    return (
      <div className={this.state.class}>
        <h1>Projects</h1>
        <div className="mirrorDiv">
          <img
            className="mirrorPic"
            src={require(`${this.mirrorPic()}`)}
            alt=""
          />

          <div className="mirrorDesc">
            Reflectere - A Google home voice controlled smart mirror Video Demo
          </div>
        </div>
        <div className="projectDiv" />
        <div className="projectDiv" />
      </div>
    );
  }
}

export default Projects;
