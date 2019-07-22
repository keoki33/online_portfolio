import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Contact extends Component {
  state = {
    class: "contact",
    mail: "@georgetlwong",
    response: "",
    name: "",
    email: "",
    message: ""
  };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "contact" });
  }

  postMessage = event => {
    event.preventDefault();
    fetch("https://boiling-tundra-71042.herokuapp.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: "",
        email: "contactform@georgetlwong.com",
        imageurl: "",
        headline: `Email from portfolio ------ Name: ${
          this.state.name
        } | Email: ${this.state.email} | Message: ${this.state.message}`
      })
    });
    this.setState({ response: "Thank you for saying hello!" });
    setTimeout(() => {
      this.setState({ response: "" });
    }, 2000);
    this.setState({ name: "", email: "", message: "" });
  };

  whatever = () => {
    let whatever = "whatever";
  };

  test = event => {
    event.preventDefault();
    this.setState({ name: "", email: "", message: "" });
  };

  handleChange(x, event) {
    this.setState({ [x]: event.target.value });
  }

  render() {
    return (
      <div className={this.state.class}>
        <h1>Hello | Hola | Néih Hóu</h1>
        <a href="mailto: contact@georgetlwong.com">
          <img src={require("./images/email.svg")} alt="" className="facePic" />{" "}
        </a>

        <a
          href="https://linkedin.com/in/george-wong-515470168"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("./images/linkedIn.png")}
            alt=""
            className="facePic"
          />
        </a>
        {this.state.response}
        <form
          id="contactForm"
          name="contact"
          type="submit"
          onSubmit={event => {
            this.postMessage(event);
          }}
        >
          <p>
            <label>
              Your Name:{" "}
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={event => {
                  this.handleChange("name", event);
                }}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={event => {
                  this.handleChange("email", event);
                }}
              />
            </label>
          </p>

          <p>
            <label>
              Message:{" "}
              <textarea
                name="message"
                value={this.state.message}
                onChange={event => {
                  this.handleChange("message", event);
                }}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;
