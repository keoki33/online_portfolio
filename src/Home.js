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
        <h1>Home Page</h1>
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
      </div>
    );
  }
}

export default Home;
