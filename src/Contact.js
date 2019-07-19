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
        <h1>Contact</h1>
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

export default Contact;
