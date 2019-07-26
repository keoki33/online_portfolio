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
        <h2>About me ...</h2>
        <img
          src={require(`./images/gw.jpg`)}
          alt=""
          className="aboutPic"
        />{" "}
        <div className="aboutText">
          <p>
            I have been many things in the past, an auto mechanic, a service
            advisor, a waiter, parking valet, apartment manager, and tech
            support.
          </p>
          <p>
            But what I have always wanted to be was a programmer. Ever since I
            typed my first line of code on my Commodore 64, I was hooked. I
            finally decided to take the plunge and go all in and enrolled in
            Flatiron coding bootcamp. Flatiron reignited my passion to code and
            has given me a great foundation to start my new journey. I’m excited
            to continue to learn and grow and share my passion to code.
          </p>
          <p>
            I'm currently working on improving my Javascript and React skills.
            Next on my list is PWA and Swift as I believe mobile is the future.
          </p>
          <p>
            If you have any questions for me or if you have any suggestions on
            how I can improve on my code please don't hesitate to contact me.
          </p>
        </div>
        <div>
          <h2>In my spare time ...</h2>
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
      </div>
    );
  }
}

export default About;
