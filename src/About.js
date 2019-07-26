import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class About extends Component {
  state = { class: "about" };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "about" });
  }

  render() {
    return (
      <div className={this.state.class}>
        <h1>About</h1>
        <img
          src={require(`./images/gw.jpg`)}
          alt=""
          className="aboutPic"
        />{" "}
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          incidunt, at natus sint, magni cupiditate maxime ipsam architecto
          voluptatibus quis itaque numquam quidem mollitia corrupti odit fugiat
          repudiandae aliquid fuga. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque, corrupti autem alias fuga totam laudantium
          voluptatibus cumque quam quia. Dolor odit repellendus vero aspernatur,
          harum nisi. Dolores repudiandae quia unde?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          incidunt, at natus sint, magni cupiditate maxime ipsam architecto
          voluptatibus quis itaque numquam quidem mollitia corrupti odit fugiat
          repudiandae aliquid fuga. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque, corrupti autem alias fuga totam laudantium
          voluptatibus cumque quam quia. Dolor odit repellendus vero aspernatur,
          harum nisi. Dolores repudiandae quia unde?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          incidunt, at natus sint, magni cupiditate maxime ipsam architecto
          voluptatibus quis itaque numquam quidem mollitia corrupti odit fugiat
          repudiandae aliquid fuga. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque, corrupti autem alias fuga totam laudantium
          voluptatibus cumque quam quia. Dolor odit repellendus vero aspernatur,
          harum nisi. Dolores repudiandae quia unde?
        </p>
        <div className="hobbiesPicsWrapper">
          <img
            src={require(`./images/hobbies/coc.jpg`)}
            alt=""
            className="hobbiesPic"
          />{" "}
          <img
            src={require(`./images/hobbies/code.jpg`)}
            alt=""
            className="hobbiesPic"
          />{" "}
          <img
            src={require(`./images/hobbies/workout.png`)}
            alt=""
            className="hobbiesPic"
          />{" "}
          <img
            src={require(`./images/hobbies/st.jpg`)}
            alt=""
            className="hobbiesPic"
          />{" "}
        </div>
      </div>
    );
  }
}

export default About;
