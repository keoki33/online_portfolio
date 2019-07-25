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
        <h1>George Wong</h1>
        <hr />
        <h2>Full Stack Developer</h2>
        <hr />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          incidunt, at natus sint, magni cupiditate maxime ipsam architecto
          voluptatibus quis itaque numquam quidem mollitia corrupti odit fugiat
          repudiandae aliquid fuga. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque, corrupti autem alias fuga totam laudantium
          voluptatibus cumque quam quia. Dolor odit repellendus vero aspernatur,
          harum nisi. Dolores repudiandae quia unde?
        </p>
        <br />
        <h1>Skills</h1>
        <div className="skillsLogoWrapper">
          <img
            className="skillsLogo"
            src={require("./images/skills/html.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/css.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/ruby.jpeg")}
            alt=""
          />{" "}
          <img
            className="skillsLogo"
            src={require("./images/skills/sinatra.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/rails.png")}
            alt=""
          />{" "}
          <img
            className="skillsLogo"
            src={require("./images/skills/websocket.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/javascript.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/react.png")}
            alt=""
          />{" "}
          <img
            className="skillsLogo"
            src={require("./images/skills/sql.jpg")}
            alt=""
          />{" "}
          <img
            className="skillsLogo"
            src={require("./images/skills/googleActions.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/heroku.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/netlify.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/a+.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/zendesk.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/ps.png")}
            alt=""
          />
          <img
            className="skillsLogo"
            src={require("./images/skills/ase.jpg")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Home;
