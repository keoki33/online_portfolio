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
        <h1>Hello | Hola | Néih Hóu</h1>
        <a href="mailto: ">
          <img src={require("./images/email.svg")} alt="" className="facePic" />{" "}
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/in/george-wong-515470168" target="_blank">
          <img
            src={require("./images/linkedIn.png")}
            alt=""
            className="facePic"
          />
        </a>
      </div>
    );
  }
}

export default Contact;
