import React, { Component } from "react";
import Footer from "./Footer";

class About extends Component {
  state = { class: "about" };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "about" });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className={this.state.class}>
        <h2>About me</h2>
        <div className="aboutPicWrapper">
          {/* <img src={require(`./images/gw.jpg`)} alt="" className="aboutPic" /> */}
          <img src={require(`./images/gw2.jpg`)} alt="" className="aboutPic" />
        </div>

        <div className="aboutText">
          <p>
            I have been many things in the past - an auto mechanic, an
            automotive service advisor, a waiter, parking valet, apartment
            manager, and tech support.
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
            I'm currently working on expanding my Javascript, React, HTML, and
            CSS skills one website at a time. Next on my list is PWA and Swift
            as I believe mobile is the future.
          </p>
          <p>
            If you have any questions for me or if you have any suggestions on
            how I can improve on my code please don't hesitate to contact me.
          </p>
        </div>
        <div>
          <h2>In my spare time</h2>
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
            <img
              src={require(`./images/hobbies/bbq.jpg`)}
              alt=""
              className="hobbiesPic"
            />{" "}
          </div>
          <h3>
            {" "}
            "Always code as if the guy who ends up maintaining your code will be
            a violent psychopath who knows where you live" - John F. Woods
          </h3>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
