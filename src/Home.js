import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  state = { class: "home" };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "home" });
  }

  render() {
    return (
      <div className={this.state.class}>
        <hr />
        <h2>George Wong</h2>
        <h3>
          Full Stack Developer | Proud Graduate of Flatiron Coding Bootcamp 2019
        </h3>
        <p>
          “Give a man a program, frustrate him for a day. Teach a man to
          program, frustrate him for a lifetime.” ― Muhammad Waseem
        </p>{" "}
        <hr />
        <br />
        <h2>Skills</h2>
        <div className="skillsLogoWrapper">
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/html.png")}
              alt=""
            />
            <br />
            HTML
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/css.png")}
              alt=""
            />
            <br />
            CSS
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/ruby.jpeg")}
              alt=""
            />
            <br />
            RUBY
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/sinatra.png")}
              alt=""
            />
            <br />
            SINATRA
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/rails.png")}
              alt=""
            />
            <br />
            RAILS
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/websocket.png")}
              alt=""
            />
            <br /> ACTION CABLE
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/javascript.png")}
              alt=""
            />
            <br />
            JAVASCRIPT
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/react.png")}
              alt=""
            />
            <br />
            REACT
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/sql.jpg")}
              alt=""
            />
            <br />
            SQL
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/googleActions.png")}
              alt=""
            />{" "}
            <br />
            GOOGLE ACTIONS
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/heroku.png")}
              alt=""
            />
            <br />
            HEROKU
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/netlify.png")}
              alt=""
            />
            <br />
            NETLIFY
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/a+.png")}
              alt=""
            />
            <br />
            A+ CERTIFICATION
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/zendesk.png")}
              alt=""
            />
            <br />
            ZENDESK
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/ps.png")}
              alt=""
            />
            <br />
            PHOTOSHOP
          </p>
          <p>
            <img
              className="skillsLogo"
              src={require("./images/skills/ase.jpg")}
              alt=""
            />{" "}
            <br />
            ASE MASTER TECH
          </p>
          <img
            className="skillsLogoMore"
            src={require("./images/skills/more.jpg")}
            alt=""
          />{" "}
        </div>
      </div>
    );
  }
}

export default Home;
