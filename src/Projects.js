import React, { Component } from "react";
import Footer from "./Footer";

class Projects extends Component {
  state = {
    class: "projects",

    mirrorPic: [
      "./images/projects/m1.png",
      "./images/projects/m2.png",
      "./images/projects/m3.png",
      "./images/projects/m4.png",
      "./images/projects/m5.png",
      "./images/projects/m6.png",
      "./images/projects/m7.png",
      "./images/projects/m8.png",
      "./images/projects/m9.png",
      "./images/projects/m10.png",
      "./images/projects/m11.png",
      "./images/projects/m12.png",
      "./images/projects/m13.png",
      "./images/projects/m14.png",
      "./images/projects/m15.png",
      "./images/projects/m16.png",
      "./images/projects/m17.jpeg",
      "./images/projects/m18.png"
    ],
    gamePic: [
      "./images/projects/g1.png",
      "./images/projects/g2.png",
      "./images/projects/g3.png",
      "./images/projects/g4.png",
      "./images/projects/g5.png",
      "./images/projects/g6.png",
      "./images/projects/g7.png"
    ],
    recipePic: [
      "./images/projects/r1.png",
      "./images/projects/r2.png",
      "./images/projects/r3.png",
      "./images/projects/r4.png",
      "./images/projects/r5.png",
      "./images/projects/r6.png",
      "./images/projects/r7.png"
    ],
    mirrorIndex: 0,
    gameIndex: 0,
    recipeIndex: 0
  };

  componentDidMount() {
    this.setState({ class: "projects" });

    this.interval = setInterval(() => this.cyclePics(), 3000);
  }

  cyclePics = () => {
    this.mirrorPic();
    this.gamePic();
    this.recipePic();
  };

  componentWillUnmount() {
    // synth.cancel();
    clearInterval(this.interval);
  }

  mirrorPic = () => {
    if (this.state.mirrorIndex == this.state.mirrorPic.length - 1) {
      this.setState({ mirrorIndex: 0 });
    }
    this.setState({
      mirrorIndex: this.state.mirrorIndex + 1
    });
  };

  gamePic = () => {
    if (this.state.gameIndex == this.state.gamePic.length - 1) {
      this.setState({ gameIndex: 0 });
    }
    this.setState({
      gameIndex: this.state.gameIndex + 1
    });
  };

  recipePic = () => {
    if (this.state.recipeIndex == this.state.recipePic.length - 1) {
      this.setState({ recipeIndex: 0 });
    }
    this.setState({
      recipeIndex: this.state.recipeIndex + 1
    });
  };

  render() {
    return (
      <div className={this.state.class}>
        <h2>Projects</h2> <div className="border" />
        <div className="projectDivs">
          <div className="mirrorDiv" onTouchStart={console.log()}>
            {/* for safari compability */}
            <img
              className="mirrorPic"
              src={require(`${this.state.mirrorPic[this.state.mirrorIndex]}`)}
              alt=""
            />
            <div className="mirrorDesc">
              <div className="descText">
                <h2>- Reflectere -</h2>A Google home voice controlled smart
                mirror. Your very own mirror mirror on the wall. Snow White
                would be so jealous! <br /> <br />
                <a
                  href="https://youtu.be/A7g2VQ8CuxM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://quizzical-noyce-07bcbc.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mirror
                </a>
                {" | "}
                <a
                  href="https://stupefied-agnesi-9b6078.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Remote Control
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/smart_mirror"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github mirror
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/remote-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github remote
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/remote-control"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
                <br />
                <div className="projectLogoWrapper">
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/react.png")}
                      alt=""
                    />
                    <br />
                    REACT
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/rails.png")}
                      alt=""
                    />
                    <br />
                    RAILS
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/websocket.png")}
                      alt=""
                    />
                    <br /> ACTION
                    <br />
                    CABLE
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/googleAssistant.png")}
                      alt=""
                    />
                    <br />
                    GOOGLE
                    <br />
                    ASSISTANT
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/heroku.png")}
                      alt=""
                    />
                    <br />
                    HEROKU
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/netlify.png")}
                      alt=""
                    />
                    <br />
                    NETLIFY
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gameDiv">
            <img
              className="gamePic"
              src={require(`${this.state.gamePic[this.state.gameIndex]}`)}
              alt=""
            />
            <div className="gameDesc">
              {" "}
              <div className="descText">
                <h2>- Flap Run or Die -</h2> A thrilling 80’s retro theme HTML
                canvas game. Avoid viruses and dinosaurs, the stuff of
                nightmares.
                <br />
                <br />
                <a
                  href="https://youtu.be/0_UtxgQkIlg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://zen-hamilton-9b3aa1.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/game_project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github front-end
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/game_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
                <br />
                <br />
                <div className="projectLogoWrapper">
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/react.png")}
                      alt=""
                    />
                    <br />
                    REACT
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/rails.png")}
                      alt=""
                    />
                    <br />
                    RAILS
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/html.png")}
                      alt=""
                    />
                    <br />
                    CANVAS
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/netlify.png")}
                      alt=""
                    />
                    <br />
                    NETLIFY
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/heroku.png")}
                      alt=""
                    />
                    <br />
                    HEROKU
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="recipeDiv">
            <img
              className="recipePic"
              src={require(`${this.state.recipePic[this.state.recipeIndex]}`)}
              alt=""
            />
            <div className="recipeDesc">
              {" "}
              <div className="descText">
                <h2>- WTC -</h2> What To Cook with what you have in the fridge?
                What if you only have 20 minutes? All this and other life's
                mysteries answered.
                <br />
                <br />
                <a
                  href="https://youtu.be/QoIAFNWLduA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </a>
                {" | "}
                <a
                  href="https://github.com/keoki33/recipes_project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github front-end
                </a>
                <br />
                <a
                  href="https://github.com/keoki33/recipes_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github back-end
                </a>
                <br />
                <br />
                <div className="projectLogoWrapper">
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/react.png")}
                      alt=""
                    />
                    <br />
                    REACT
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/rails.png")}
                      alt=""
                    />
                    <br />
                    RAILS
                  </p>

                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/html.png")}
                      alt=""
                    />
                    <br />
                    HTML
                  </p>
                  <p>
                    <img
                      className="projectLogo"
                      src={require("./images/skills/css.png")}
                      alt=""
                    />
                    <br />
                    CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="borderB" />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;
