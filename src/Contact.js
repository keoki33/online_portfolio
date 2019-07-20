import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Contact extends Component {
  state = { class: "contact" };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "contact" });
  }

  whatever = () => {};

  render() {
    return (
      <div className={this.state.class}>
        <h1>Don't be a stranger</h1>
        <img
          src={require("./images/email.png")}
          alt=""
          className="facePic"
        />{" "}
        <img
          src={require("./images/linkedIn.png")}
          alt=""
          className="facePic"
        />{" "}
      </div>
    );
  }
}

export default Contact;
