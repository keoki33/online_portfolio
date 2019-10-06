import React, { Component } from "react";
import Footer from "./Footer";

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
        headline: `Email from portfolio ------ Name: ${this.state.name} | Email: ${this.state.email} | Message: ${this.state.message}`
      })
    });
    this.setState({ response: "Thank you for saying hello!" });
    setTimeout(() => {
      this.setState({ response: "" });
    }, 2000);
    this.setState({ name: "", email: "", message: "" });
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
        <h1>Hello</h1>
        <h1> | </h1>
        <h1>Hola</h1>
        <h1> | </h1>
        <h1>Néih Hóu</h1>
        <br />
        <a href="mailto: contact@georgetlwong.com">
          {/* <img src={require("./images/email.svg")} alt="" className="facePic" />{" "} */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M499.1 10C229.5 10 10 229.5 10 499.1 10 770.5 229.5 990 499.1 990 768.8 990 990 770.5 990 499.1 990 229.5 770.5 10 499.1 10zm281.8 672.3H219.1V352.2l280 207.4 280-207.4v330.1h1.8zM499.1 526.8l-280-207.4h560l-280 207.4z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/georgetlwong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img
            src={require("./images/linkedIn.png")}
            alt=""
            className="facePic"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <path d="M500 10C229.4 10 10 229.4 10 500s219.4 490 490 490 490-219.4 490-490c0-270.7-219.4-490-490-490zM377.5 737.3H255V308.6h122.5v428.7zm-57.5-455c-31.7 0-57.4-25.7-57.4-57.5s25.7-57.5 57.4-57.5c31.7.1 57.5 25.8 57.5 57.5 0 31.8-25.7 57.5-57.5 57.5zm486.2 455H683.7v-265c0-31.1-8.9-52.8-47-52.8-63.3 0-75.5 52.8-75.5 52.8v265.1H438.7V308.6h122.5v41c17.5-13.4 61.2-40.9 122.5-40.9 39.7 0 122.5 23.8 122.5 167.3v261.3z" />
          </svg>
        </a>

        <form
          id="contactForm"
          name="contact"
          type="submit"
          onSubmit={event => {
            this.postMessage(event);
          }}
        >
          <div className="response">{this.state.response}</div>
          <p>
            <label>
              <input
                required
                placeholder="Name:"
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
              <input
                placeholder="Email:"
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
              <textarea
                placeholder="Message:"
                name="message"
                value={this.state.message}
                onChange={event => {
                  this.handleChange("message", event);
                }}
              />
            </label>
          </p>
          <button type="submit">Send</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Contact;
